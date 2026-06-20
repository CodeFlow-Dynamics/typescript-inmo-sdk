import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

import type { ProblemDetails } from '../api/types.gen.js';
import { ConnectionErrors, ErrorType } from './errors/errors.js';
import type { ProblemDetailsEntity, ProblemDetailsField } from './errors/errors.js';
import { err, ok, type ResultApi } from './result.js';

function normalizeProblemJson(json: Record<string, unknown>): Record<string, unknown> {
  const normalized = { ...json };

  if ('Fields' in normalized && !('fields' in normalized)) {
    normalized.fields = normalized.Fields;
  }

  if ('Entity' in normalized && !('entity' in normalized)) {
    normalized.entity = normalized.Entity;
  }

  return normalized;
}

function isAxiosError(value: unknown): value is AxiosError {
  return axios.isAxiosError(value);
}

function isAxiosResponse(value: unknown): value is AxiosResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'status' in value &&
    'data' in value &&
    'headers' in value
  );
}

function toProblemDetails(value: Record<string, unknown>): ProblemDetails {
  return {
    type: typeof value.type === 'string' ? value.type : null,
    title: typeof value.title === 'string' ? value.title : null,
    status: typeof value.status === 'number' ? value.status : null,
    detail: typeof value.detail === 'string' ? value.detail : null,
    instance: typeof value.instance === 'string' ? value.instance : null,
  };
}

function toProblemDetailsField(value: Record<string, unknown>): ProblemDetailsField {
  const fields = value.fields ?? value.Fields;
  return {
    ...toProblemDetails(value),
    fields: Array.isArray(fields)
      ? (fields.filter((field) => typeof field === 'object' && field !== null) as ProblemDetailsField['fields'])
      : undefined,
  };
}

function toProblemDetailsEntity(value: Record<string, unknown>): ProblemDetailsEntity {
  const entity = value.entity ?? value.Entity;
  return {
    ...toProblemDetails(value),
    entity: typeof entity === 'string' ? entity : undefined,
  };
}

function parseProblemDetails(data: unknown): ProblemDetails[] {
  if (typeof data === 'string') {
    try {
      return parseProblemDetails(JSON.parse(data));
    } catch {
      return [
        {
          type: ErrorType.unknown,
          title: 'unknownServerError',
          detail: data,
        },
      ];
    }
  }

  if (Array.isArray(data) && data.length > 0) {
    const first = data[0];
    if (typeof first === 'object' && first !== null) {
      return [toProblemDetailsField(normalizeProblemJson(first as Record<string, unknown>))];
    }
  }

  if (typeof data === 'object' && data !== null) {
    const normalized = normalizeProblemJson(data as Record<string, unknown>);
    const hasFields = Array.isArray(normalized.fields) || Array.isArray(normalized.Fields);
    const hasEntity =
      typeof normalized.entity === 'string' || typeof normalized.Entity === 'string';

    if (hasFields) {
      return [toProblemDetailsField(normalized)];
    }

    if (hasEntity) {
      return [toProblemDetailsEntity(normalized)];
    }

    return [toProblemDetails(normalized)];
  }

  return [
    {
      type: ErrorType.unknown,
      title: 'unknownServerError',
      detail: 'Unknown server error',
    },
  ];
}

export abstract class BaseRepo {
  protected async executeApiCall<T>(
    apiCall: () => Promise<unknown>,
    mapResponse?: (data: unknown) => T,
  ): Promise<ResultApi<T>> {
    try {
      const result = await apiCall();

      if (isAxiosError(result)) {
        return this.handleAxiosError<T>(result);
      }

      if (!isAxiosResponse(result)) {
        return err([
          {
            type: ErrorType.unknown,
            title: 'unknownServerError',
            detail: 'Unexpected API response shape',
          },
        ]);
      }

      const status = result.status ?? 0;
      if (status >= 200 && status < 300) {
        if (mapResponse) {
          return ok(mapResponse(result.data));
        }

        return ok(result.data as T);
      }

      return err(parseProblemDetails(result.data).map((problem) => ({
        ...problem,
        status: problem.status ?? status,
      })));
    } catch (error) {
      if (isAxiosError(error)) {
        return this.handleAxiosError<T>(error);
      }

      return err([
        {
          type: ErrorType.unknown,
          title: 'unknownServerError',
          detail: error instanceof Error ? error.message : 'Unknown server error',
        },
      ]);
    }
  }

  private handleAxiosError<T>(error: AxiosError): ResultApi<T> {
    if (
      error.code === 'ERR_NETWORK' ||
      error.code === 'ECONNABORTED' ||
      error.message.toLowerCase().includes('network')
    ) {
      return err([ConnectionErrors.connectionFailed]);
    }

    const data = error.response?.data ?? (error as AxiosError & { error?: unknown }).error;
    const status = error.response?.status;

    return err(
      parseProblemDetails(data).map((problem) => ({
        ...problem,
        status: problem.status ?? status ?? null,
      })),
    );
  }
}
