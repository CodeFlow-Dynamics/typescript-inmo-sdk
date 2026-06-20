import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import {
  dataTypeName,
  groupOperationsByTag,
  isVoidResponse,
  readSdkOperations,
  readTypesContent,
  responseTypeName,
  stripApiVersionFromName,
  tagToAccessor,
  tagToClassPrefix,
  tagToFileBase,
} from './lib/openapi-utils.js';

const rootDir = process.cwd();
const outputDir = join(rootDir, 'src/repo');
const sdkContent = readFileSync(join(rootDir, 'src/api/sdk.gen.ts'), 'utf8');

mkdirSync(outputDir, { recursive: true });

const operations = readSdkOperations(rootDir);
const grouped = groupOperationsByTag(operations.values());
const typesContent = readTypesContent(rootDir);
const repoFiles: string[] = [];

for (const [tag, tagOperations] of grouped.entries()) {
  const repoName = `${tagToClassPrefix(tag)}Repo`;
  const implName = `${repoName}Impl`;
  const clientAccessor = tagToAccessor(tag);
  const fileBase = tagToFileBase(tag);
  const fileName = `${fileBase}_repo.ts`;

  const typeImports = new Set<string>();
  const abstractMethods: string[] = [];
  const implMethods: string[] = [];

  for (const operation of tagOperations) {
    const repoMethodName = stripApiVersionFromName(operation.functionName);
    const resultType = resolveResultType(operation.functionName, typesContent);
    const dataType = dataTypeName(operation.functionName);

    if (resultType !== 'void') {
      typeImports.add(resultType);
    }

    typeImports.add(dataType);

    const resultGeneric = resultType === 'void' ? 'void' : resultType;
    const paramsType = `Omit<${dataType}, 'url'>`;

    const optionsRequired = isSdkOptionsRequired(operation.functionName, sdkContent);

    abstractMethods.push(
      `  ${repoMethodName}(options${optionsRequired ? '' : '?'}: ${paramsType}): Promise<ResultApi<${resultGeneric}>>;`,
    );

    implMethods.push(`  ${repoMethodName}(options${optionsRequired ? '' : '?'}: ${paramsType}): Promise<ResultApi<${resultGeneric}>> {
    return this.executeApiCall<${resultGeneric}>(
      () => this.api.${clientAccessor}.${operation.functionName}(options),
    );
  }`);
  }

  const typeImportLine =
    typeImports.size > 0
      ? `import type { ${[...typeImports].sort((a, b) => a.localeCompare(b)).join(', ')} } from '../api/types.gen.js';\n`
      : '';

  const content = `// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

${typeImportLine}import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface ${repoName} {
${abstractMethods.join('\n')}
}

export class ${implName} extends BaseRepo implements ${repoName} {
  constructor(private readonly api: InmoApi) {
    super();
  }

${implMethods.join('\n\n')}
}
`;

  writeFileSync(join(outputDir, fileName), content, 'utf8');
  repoFiles.push(fileName);
  console.log(`Generated src/repo/${fileName}`);
}

const exportContent = `// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

${repoFiles
  .map((file) => `export * from './${file.replace('.ts', '.js')}';`)
  .join('\n')}
`;

writeFileSync(join(outputDir, 'index.ts'), exportContent, 'utf8');
console.log('Generated src/repo/index.ts');

const repoFactoryEntries = [...grouped.entries()]
  .map(([tag]) => {
    const accessor = tagToAccessor(tag);
    const repoName = `${tagToClassPrefix(tag)}RepoImpl`;
    return `    ${accessor}: new ${repoName}(api),`;
  })
  .join('\n');

const repoInterfaceFields = [...grouped.entries()]
  .map(([tag]) => {
    const accessor = tagToAccessor(tag);
    const repoName = `${tagToClassPrefix(tag)}Repo`;
    return `  ${accessor}: ${repoName};`;
  })
  .join('\n');

const repoImplImports = [...grouped.entries()]
  .map(([tag]) => {
    const fileBase = tagToFileBase(tag);
    const repoName = `${tagToClassPrefix(tag)}RepoImpl`;
    return `import { ${repoName} } from './${fileBase}_repo.js';`;
  })
  .join('\n');

const repoTypeImports = [...grouped.keys()]
  .map((tag) => `${tagToClassPrefix(tag)}Repo`)
  .join(', ');

const inmoReposContent = `// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { InmoApi } from '../api/inmoApi.js';
${repoImplImports}
import type { ${repoTypeImports} } from './index.js';

export interface InmoRepos {
${repoInterfaceFields}
}

export function createInmoRepos(api: InmoApi): InmoRepos {
  return {
${repoFactoryEntries}
  };
}
`;

writeFileSync(join(outputDir, 'inmoRepos.ts'), inmoReposContent, 'utf8');
console.log('Generated src/repo/inmoRepos.ts');

function resolveResultType(functionName: string, typesContent: string): string {
  const voidResult = isVoidResponse(functionName, typesContent);
  if (voidResult === 'void') {
    return 'void';
  }

  const responseType = responseTypeName(functionName);
  if (typesContent.includes(`export type ${responseType} =`)) {
    return responseType;
  }

  return 'void';
}

function isSdkOptionsRequired(functionName: string, sdkSource: string): boolean {
  const line = sdkSource
    .split('\n')
    .find((entry) => entry.startsWith(`export const ${functionName} =`));

  if (!line) {
    return false;
  }

  return !line.includes('options?:');
}

