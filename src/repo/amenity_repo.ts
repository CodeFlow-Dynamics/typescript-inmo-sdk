// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1AmenitiesData, GetApiV1AmenitiesResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface AmenityRepo {
  getAmenities(options?: Omit<GetApiV1AmenitiesData, 'url'>): Promise<ResultApi<GetApiV1AmenitiesResponse>>;
}

export class AmenityRepoImpl extends BaseRepo implements AmenityRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getAmenities(options?: Omit<GetApiV1AmenitiesData, 'url'>): Promise<ResultApi<GetApiV1AmenitiesResponse>> {
    return this.executeApiCall<GetApiV1AmenitiesResponse>(
      () => this.api.amenity.getApiV1Amenities(options),
    );
  }
}
