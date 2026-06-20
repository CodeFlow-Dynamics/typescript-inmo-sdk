import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './src/schema/schema.json',
  output: './src/api',
  plugins: [
    '@hey-api/typescript',
    {
      name: '@hey-api/client-axios',
      throwOnError: false,
    },
    {
      name: '@hey-api/sdk',
      operations: {
        strategy: 'byTags',
      },
      responseStyle: 'fields',
    },
  ],
});
