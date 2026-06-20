// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1CurrenciesByIdData, GetApiV1CurrenciesByIdResponse, GetApiV1CurrenciesData, GetApiV1CurrenciesResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface CurrencyRepo {
  getCurrencies(options?: Omit<GetApiV1CurrenciesData, 'url'>): Promise<ResultApi<GetApiV1CurrenciesResponse>>;
  getCurrenciesById(options: Omit<GetApiV1CurrenciesByIdData, 'url'>): Promise<ResultApi<GetApiV1CurrenciesByIdResponse>>;
}

export class CurrencyRepoImpl extends BaseRepo implements CurrencyRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getCurrencies(options?: Omit<GetApiV1CurrenciesData, 'url'>): Promise<ResultApi<GetApiV1CurrenciesResponse>> {
    return this.executeApiCall<GetApiV1CurrenciesResponse>(
      () => this.api.currency.getApiV1Currencies(options),
    );
  }

  getCurrenciesById(options: Omit<GetApiV1CurrenciesByIdData, 'url'>): Promise<ResultApi<GetApiV1CurrenciesByIdResponse>> {
    return this.executeApiCall<GetApiV1CurrenciesByIdResponse>(
      () => this.api.currency.getApiV1CurrenciesById(options),
    );
  }
}
