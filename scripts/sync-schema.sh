#!/usr/bin/env bash
set -euo pipefail

GENERATE=false
BACKEND_ROOT=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --generate|-Generate)
      GENERATE=true
      shift
      ;;
    --backend-root=*)
      BACKEND_ROOT="${1#*=}"
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SDK_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$SDK_ROOT"

ARGS=()
if [[ "$GENERATE" == true ]]; then
  ARGS+=(--generate)
fi
if [[ -n "$BACKEND_ROOT" ]]; then
  ARGS+=(--backend-root="$BACKEND_ROOT")
fi

node --experimental-strip-types scripts/sync-schema.ts "${ARGS[@]}"
