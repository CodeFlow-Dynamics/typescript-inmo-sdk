import type { ProblemDetails } from '../api/types.gen.js';

export type ResultApi<T> =
  | { ok: true; data: T }
  | { ok: false; errors: ProblemDetails[] };

export type Result<T> = ResultApi<T>;

export function ok<T>(data: T): ResultApi<T> {
  return { ok: true, data };
}

export function err(errors: ProblemDetails[]): ResultApi<never> {
  return { ok: false, errors };
}
