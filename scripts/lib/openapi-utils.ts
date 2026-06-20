import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export interface SdkOperation {
  functionName: string;
  method: HttpMethod;
  path: string;
  tag: string;
}

export interface OpenApiSchema {
  paths: Record<
    string,
    Partial<Record<HttpMethod, { tags?: string[] }>>
  >;
}

const HTTP_METHODS: HttpMethod[] = ['get', 'post', 'put', 'delete', 'patch'];

export function readSchema(rootDir: string): OpenApiSchema {
  const schemaPath = join(rootDir, 'src/schema/schema.json');
  return JSON.parse(readFileSync(schemaPath, 'utf8')) as OpenApiSchema;
}

export function readSdkOperations(rootDir: string): Map<string, SdkOperation> {
  const sdkPath = join(rootDir, 'src/api/sdk.gen.ts');
  const content = readFileSync(sdkPath, 'utf8');
  const schema = readSchema(rootDir);
  const tagByPathMethod = buildTagIndex(schema);
  const operations = new Map<string, SdkOperation>();

  const functionRegex =
    /export const (\w+) = [\s\S]*?\.(get|post|put|delete|patch)<[\s\S]*?url: '([^']+)'/g;

  for (const match of content.matchAll(functionRegex)) {
    const functionName = match[1];
    const method = match[2] as HttpMethod;
    const path = match[3];
    const tag = tagByPathMethod.get(`${method.toUpperCase()} ${path}`);

    if (!tag) {
      throw new Error(`No OpenAPI tag found for ${method.toUpperCase()} ${path} (${functionName})`);
    }

    operations.set(functionName, {
      functionName,
      method,
      path,
      tag,
    });
  }

  return operations;
}

function buildTagIndex(schema: OpenApiSchema): Map<string, string> {
  const index = new Map<string, string>();

  for (const [path, pathItem] of Object.entries(schema.paths)) {
    for (const method of HTTP_METHODS) {
      const operation = pathItem[method];
      if (!operation?.tags?.[0]) {
        continue;
      }

      index.set(`${method.toUpperCase()} ${path}`, operation.tags[0]);
    }
  }

  return index;
}

export function groupOperationsByTag(
  operations: Iterable<SdkOperation>,
): Map<string, SdkOperation[]> {
  const grouped = new Map<string, SdkOperation[]>();

  for (const operation of operations) {
    const list = grouped.get(operation.tag) ?? [];
    list.push(operation);
    grouped.set(operation.tag, list);
  }

  for (const list of grouped.values()) {
    list.sort((a, b) => a.functionName.localeCompare(b.functionName));
  }

  return grouped;
}

export function tagToAccessor(tag: string): string {
  return tag.charAt(0).toLowerCase() + tag.slice(1);
}

export function tagToClassPrefix(tag: string): string {
  return tag;
}

export function tagToFileBase(tag: string): string {
  return tag.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
}

export function stripApiVersionFromName(name: string): string {
  return name.replace(/ApiV\d+/g, '');
}

export function responseTypeName(functionName: string): string {
  const pascal =
    functionName.charAt(0).toUpperCase() +
    functionName.slice(1).replace(/ApiV(\d+)/g, 'ApiV$1');
  return `${pascal}Response`;
}

export function dataTypeName(functionName: string): string {
  const pascal =
    functionName.charAt(0).toUpperCase() +
    functionName.slice(1).replace(/ApiV(\d+)/g, 'ApiV$1');
  return `${pascal}Data`;
}

export function isVoidResponse(functionName: string, typesContent: string): string {
  const responseType = responseTypeName(functionName);
  const blockRegex = new RegExp(
    String.raw`export type ${responseType} = ${responseType}s\[keyof ${responseType}s\];`,
  );

  if (!blockRegex.test(typesContent)) {
    return 'unknown';
  }

  const responsesRegex = new RegExp(
    String.raw`export type ${responseType}s = \{([\s\S]*?)\};`,
  );
  const match = new RegExp(responsesRegex).exec(typesContent);
  if (!match) {
    return 'unknown';
  }

  const body = match[1];
  if (/:\s*void\b/.test(body) || !/:\s*[A-Za-z]/.test(body)) {
    return 'void';
  }

  const typeMatch = /:\s*(\w+)/.exec(body);
  return typeMatch?.[1] ?? 'unknown';
}

export function readTypesContent(rootDir: string): string {
  return readFileSync(join(rootDir, 'src/api/types.gen.ts'), 'utf8');
}
