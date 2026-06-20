import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import {
  groupOperationsByTag,
  readSdkOperations,
  tagToAccessor,
  tagToClassPrefix,
  tagToFileBase,
} from './lib/openapi-utils.js';

const rootDir = process.cwd();
const outputDir = join(rootDir, 'src/api/clients');

mkdirSync(outputDir, { recursive: true });

const operations = readSdkOperations(rootDir);
const grouped = groupOperationsByTag(operations.values());
const clientFiles: Array<{ tag: string; className: string; fileBase: string; fileName: string }> = [];

for (const [tag, tagOperations] of grouped.entries()) {
  const className = `${tagToClassPrefix(tag)}Client`;
  const fileBase = tagToFileBase(tag);
  const fileName = `${fileBase}_client.ts`;
  const methods = tagOperations
    .map((operation) => {
      return `  ${operation.functionName}(...args: Parameters<typeof sdk.${operation.functionName}>) {
    const [options] = args;
    return sdk.${operation.functionName}({ ...options, client: this.client });
  }`;
    })
    .join('\n\n');

  const content = `// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class ${className} {
  constructor(private readonly client: Client) {}

${methods}
}
`;

  writeFileSync(join(outputDir, fileName), content, 'utf8');
  clientFiles.push({ tag, className, fileBase, fileName });
  console.log(`Generated src/api/clients/${fileName}`);
}

const imports = clientFiles
  .map(({ className, fileBase }) => `import { ${className} } from './clients/${fileBase}_client.js';`)
  .join('\n');

const fields = clientFiles
  .map(({ tag }) => {
    const accessor = tagToAccessor(tag);
    const className = `${tagToClassPrefix(tag)}Client`;
    const field = `_${accessor}`;
    return `  private ${field}?: ${className};

  get ${accessor}(): ${className} {
    return this.${field} ??= new ${className}(this.client);
  }`;
  })
  .join('\n\n');

const inmoApiContent = `// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';

${imports}

export class InmoApi {
  static readonly version = '1.0';

  constructor(private readonly client: Client) {}

${fields}
}
`;

writeFileSync(join(rootDir, 'src/api/inmoApi.ts'), inmoApiContent, 'utf8');
console.log('Generated src/api/inmoApi.ts');

const exportContent = `// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

${clientFiles.map(({ fileBase, className }) => `export { ${className} } from './${fileBase}_client.js';`).join('\n')}
`;

writeFileSync(join(outputDir, 'export.ts'), exportContent, 'utf8');
console.log('Generated src/api/clients/export.ts');
