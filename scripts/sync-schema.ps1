#!/usr/bin/env pwsh
# Sync OpenAPI schema from InmoBackend into src/schema/schema.json
# Usage:
#   ./scripts/sync-schema.ps1
#   ./scripts/sync-schema.ps1 -Generate

param(
    [switch]$Generate,
    [string]$BackendRoot = (Join-Path (Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $PSScriptRoot))) 'CSharp/InmoBackend')
)

$ErrorActionPreference = 'Stop'
$sdkRoot = Split-Path -Parent $PSScriptRoot
Push-Location $sdkRoot
try {
    $nodeArgs = @()
    if ($Generate) { $nodeArgs += '--generate' }
    $nodeArgs += "--backend-root=$BackendRoot"
    node --experimental-strip-types scripts/sync-schema.ts @nodeArgs
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
finally {
    Pop-Location
}
