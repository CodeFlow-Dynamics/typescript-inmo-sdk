export type { ProblemDetails } from '../../api/types.gen.js';

export type ProblemDetailsFieldError = {
  field?: string;
  title?: string;
  message?: string;
  type?: string;
};

export type ProblemDetailsField = import('../../api/types.gen.js').ProblemDetails & {
  fields?: ProblemDetailsFieldError[];
  Fields?: ProblemDetailsFieldError[];
};

export type ProblemDetailsEntity = import('../../api/types.gen.js').ProblemDetails & {
  entity?: string;
  Entity?: string;
};

export enum ErrorType {
  connection = 'connection',
  unknown = 'unknown',
}

export const ConnectionErrors = {
  connectionFailed: {
    type: ErrorType.connection,
    title: 'errorConnectionFailed',
    detail: 'Connection failed',
  },
} as const satisfies Record<string, import('../../api/types.gen.js').ProblemDetails>;
