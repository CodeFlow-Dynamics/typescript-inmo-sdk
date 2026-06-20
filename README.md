# inmo-api-sdk

Internal API SDK package for Inmo Web clients.

## Purpose

This package hosts:

- Generated OpenAPI clients and DTOs (Axios via `@hey-api/openapi-ts`)
- Generated repository adapters with `ResultApi<T>` error handling
- Shared API transport, JWT interceptor, and error helpers

## Requirements

- Node.js 27+ (see `.nvmrc`)

## Regenerate from OpenAPI spec

After updating `src/schema/schema.json`:

```bash
npm run generate
npm run build
```

Or sync the latest spec from InmoBackend and regenerate:

```powershell
# PowerShell
./scripts/sync-schema.ps1 -Generate
npm run generate
npm run build
```

```bash
# Bash
bash scripts/sync-schema.sh --generate
npm run generate
npm run build
```

### Generate OpenAPI spec locally (InmoBackend)

From the InmoBackend repo root:

```powershell
dotnet tool restore
dotnet build src/Project/Inmo.API/Inmo.API.csproj -c Release
$env:ASPNETCORE_ENVIRONMENT = "Development"
$env:MEDIA_WATERMARK_PATH = "src/Project/Inmo.API/Assets/watermark.png"
./scripts/openapi/generate-openapi.ps1
```

Then sync into this repo:

```powershell
./scripts/sync-schema.ps1
npm run generate
```

## Usage

```typescript
import { createInmoApi } from 'inmo-api-sdk';

const { api, repos } = createInmoApi({
  baseURL: 'http://localhost:7000',
  tokenProvider: {
    async getToken() {
      return localStorage.getItem('accessToken');
    },
  },
});

// Low-level client
const response = await api.auth.postApiV1AuthLoginEmail({
  body: { email: 'user@example.com', password: 'secret' },
});

// Repository layer (ResultApi)
const result = await repos.auth.postAuthLoginEmail({
  body: { email: 'user@example.com', password: 'secret' },
});

if (result.ok) {
  console.log(result.data);
} else {
  console.error(result.errors);
}
```

## Consumption in a web app

```json
{
  "dependencies": {
    "inmo-api-sdk": "git+https://github.com/CodeFlow-Dynamics/typescript-inmo-sdk.git#main"
  }
}
```

For local development:

```json
{
  "dependencies": {
    "inmo-api-sdk": "file:../typescript-inmo-sdk"
  }
}
```

## CI

OpenAPI sync is triggered by `repository_dispatch` from InmoBackend (`openapi-spec-updated`).
See `.github/workflows/sync-openapi.yml`.

## Package layout

```
src/
├── schema/schema.json       # OpenAPI 3.1 spec
├── api/                     # Generated Axios clients + DTOs
├── repo/                    # Generated repository layer
├── core/                    # BaseRepo, ResultApi, errors
├── interceptors/            # JWT auth interceptor
└── createInmoApi.ts         # Factory helper
```
