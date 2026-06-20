// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class FavouriteSearchClient {
  constructor(private readonly client: Client) {}

  deleteApiV1SearchesFavouritesById(...args: Parameters<typeof sdk.deleteApiV1SearchesFavouritesById>) {
    const [options] = args;
    return sdk.deleteApiV1SearchesFavouritesById({ ...options, client: this.client });
  }

  getApiV1SearchesFavourites(...args: Parameters<typeof sdk.getApiV1SearchesFavourites>) {
    const [options] = args;
    return sdk.getApiV1SearchesFavourites({ ...options, client: this.client });
  }

  getApiV1SearchesFavouritesById(...args: Parameters<typeof sdk.getApiV1SearchesFavouritesById>) {
    const [options] = args;
    return sdk.getApiV1SearchesFavouritesById({ ...options, client: this.client });
  }

  patchApiV1SearchesFavouritesByIdPause(...args: Parameters<typeof sdk.patchApiV1SearchesFavouritesByIdPause>) {
    const [options] = args;
    return sdk.patchApiV1SearchesFavouritesByIdPause({ ...options, client: this.client });
  }

  patchApiV1SearchesFavouritesByIdResume(...args: Parameters<typeof sdk.patchApiV1SearchesFavouritesByIdResume>) {
    const [options] = args;
    return sdk.patchApiV1SearchesFavouritesByIdResume({ ...options, client: this.client });
  }

  postApiV1SearchesFavourites(...args: Parameters<typeof sdk.postApiV1SearchesFavourites>) {
    const [options] = args;
    return sdk.postApiV1SearchesFavourites({ ...options, client: this.client });
  }

  putApiV1SearchesFavouritesById(...args: Parameters<typeof sdk.putApiV1SearchesFavouritesById>) {
    const [options] = args;
    return sdk.putApiV1SearchesFavouritesById({ ...options, client: this.client });
  }
}
