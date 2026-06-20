import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

interface SyncOptions {
  generate?: boolean;
  backendRoot?: string;
}

function parseArgs(argv: string[]): SyncOptions {
  const options: SyncOptions = {};

  for (const arg of argv) {
    if (arg === '--generate' || arg === '-Generate') {
      options.generate = true;
      continue;
    }

    if (arg.startsWith('--backend-root=')) {
      options.backendRoot = arg.slice('--backend-root='.length);
    }
  }

  return options;
}

function findLatestSwaggerFile(openApiDir: string): string | undefined {
  if (!existsSync(openApiDir)) {
    return undefined;
  }

  const candidates = readdirSync(openApiDir)
    .filter((name) => name.startsWith('swagger-') && name.endsWith('.json'))
    .map((name) => join(openApiDir, name))
    .filter((path) => statSync(path).isFile())
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);

  return candidates[0];
}

function main(): void {
  const options = parseArgs(process.argv.slice(2));
  const sdkRoot = process.cwd();
  const backendRoot =
    options.backendRoot ??
    resolve(sdkRoot, '../../CSharp/InmoBackend');
  const openApiDir = join(backendRoot, 'docs/openapi');
  const targetSchema = join(sdkRoot, 'src/schema/schema.json');

  if (options.generate) {
    const isWindows = process.platform === 'win32';
    const script = join(
      backendRoot,
      isWindows ? 'scripts/openapi/generate-openapi.ps1' : 'scripts/openapi/generate-openapi.sh',
    );

    if (!existsSync(script)) {
      throw new Error(`OpenAPI generator script not found: ${script}`);
    }

    const command = isWindows
      ? ['pwsh', '-File', script]
      : ['bash', script];
    const result = spawnSync(command[0], command.slice(1), {
      cwd: backendRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        ASPNETCORE_ENVIRONMENT: process.env.ASPNETCORE_ENVIRONMENT ?? 'Development',
        MEDIA_WATERMARK_PATH:
          process.env.MEDIA_WATERMARK_PATH ??
          'src/Project/Inmo.API/Assets/watermark.png',
      },
    });

    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  }

  const latest = findLatestSwaggerFile(openApiDir);
  if (!latest) {
    throw new Error(`No swagger-*.json found in ${openApiDir}`);
  }

  mkdirSync(join(sdkRoot, 'src/schema'), { recursive: true });
  copyFileSync(latest, targetSchema);
  console.log(`Copied ${latest} -> ${targetSchema}`);
}

main();
