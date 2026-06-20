// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';

import { AdminClient } from './clients/admin_client.js';
import { AdministrativeDivisionClient } from './clients/administrative_division_client.js';
import { AdministrativeLevelClient } from './clients/administrative_level_client.js';
import { AmenityClient } from './clients/amenity_client.js';
import { AuthClient } from './clients/auth_client.js';
import { AuthSecurityClient } from './clients/auth_security_client.js';
import { CountryClient } from './clients/country_client.js';
import { CurrencyClient } from './clients/currency_client.js';
import { DocumentClient } from './clients/document_client.js';
import { FavouritesClient } from './clients/favourites_client.js';
import { FavouriteSearchClient } from './clients/favourite_search_client.js';
import { IdentificationClient } from './clients/identification_client.js';
import { InmoCategoryClient } from './clients/inmo_category_client.js';
import { InmoTypeClient } from './clients/inmo_type_client.js';
import { InquiryClient } from './clients/inquiry_client.js';
import { ListingClient } from './clients/listing_client.js';
import { ListingOfferClient } from './clients/listing_offer_client.js';
import { MasterClient } from './clients/master_client.js';
import { MediaClient } from './clients/media_client.js';
import { PasswordClient } from './clients/password_client.js';
import { PhoneClient } from './clients/phone_client.js';
import { PublisherClient } from './clients/publisher_client.js';
import { SearchClient } from './clients/search_client.js';
import { TokenClient } from './clients/token_client.js';
import { UserClient } from './clients/user_client.js';
import { VerificationSubmissionClient } from './clients/verification_submission_client.js';

export class InmoApi {
  static readonly version = '1.0';

  constructor(private readonly client: Client) {}

  private _admin?: AdminClient;

  get admin(): AdminClient {
    return this._admin ??= new AdminClient(this.client);
  }

  private _administrativeDivision?: AdministrativeDivisionClient;

  get administrativeDivision(): AdministrativeDivisionClient {
    return this._administrativeDivision ??= new AdministrativeDivisionClient(this.client);
  }

  private _administrativeLevel?: AdministrativeLevelClient;

  get administrativeLevel(): AdministrativeLevelClient {
    return this._administrativeLevel ??= new AdministrativeLevelClient(this.client);
  }

  private _amenity?: AmenityClient;

  get amenity(): AmenityClient {
    return this._amenity ??= new AmenityClient(this.client);
  }

  private _auth?: AuthClient;

  get auth(): AuthClient {
    return this._auth ??= new AuthClient(this.client);
  }

  private _authSecurity?: AuthSecurityClient;

  get authSecurity(): AuthSecurityClient {
    return this._authSecurity ??= new AuthSecurityClient(this.client);
  }

  private _country?: CountryClient;

  get country(): CountryClient {
    return this._country ??= new CountryClient(this.client);
  }

  private _currency?: CurrencyClient;

  get currency(): CurrencyClient {
    return this._currency ??= new CurrencyClient(this.client);
  }

  private _document?: DocumentClient;

  get document(): DocumentClient {
    return this._document ??= new DocumentClient(this.client);
  }

  private _favourites?: FavouritesClient;

  get favourites(): FavouritesClient {
    return this._favourites ??= new FavouritesClient(this.client);
  }

  private _favouriteSearch?: FavouriteSearchClient;

  get favouriteSearch(): FavouriteSearchClient {
    return this._favouriteSearch ??= new FavouriteSearchClient(this.client);
  }

  private _identification?: IdentificationClient;

  get identification(): IdentificationClient {
    return this._identification ??= new IdentificationClient(this.client);
  }

  private _inmoCategory?: InmoCategoryClient;

  get inmoCategory(): InmoCategoryClient {
    return this._inmoCategory ??= new InmoCategoryClient(this.client);
  }

  private _inmoType?: InmoTypeClient;

  get inmoType(): InmoTypeClient {
    return this._inmoType ??= new InmoTypeClient(this.client);
  }

  private _inquiry?: InquiryClient;

  get inquiry(): InquiryClient {
    return this._inquiry ??= new InquiryClient(this.client);
  }

  private _listing?: ListingClient;

  get listing(): ListingClient {
    return this._listing ??= new ListingClient(this.client);
  }

  private _listingOffer?: ListingOfferClient;

  get listingOffer(): ListingOfferClient {
    return this._listingOffer ??= new ListingOfferClient(this.client);
  }

  private _master?: MasterClient;

  get master(): MasterClient {
    return this._master ??= new MasterClient(this.client);
  }

  private _media?: MediaClient;

  get media(): MediaClient {
    return this._media ??= new MediaClient(this.client);
  }

  private _password?: PasswordClient;

  get password(): PasswordClient {
    return this._password ??= new PasswordClient(this.client);
  }

  private _phone?: PhoneClient;

  get phone(): PhoneClient {
    return this._phone ??= new PhoneClient(this.client);
  }

  private _publisher?: PublisherClient;

  get publisher(): PublisherClient {
    return this._publisher ??= new PublisherClient(this.client);
  }

  private _search?: SearchClient;

  get search(): SearchClient {
    return this._search ??= new SearchClient(this.client);
  }

  private _token?: TokenClient;

  get token(): TokenClient {
    return this._token ??= new TokenClient(this.client);
  }

  private _user?: UserClient;

  get user(): UserClient {
    return this._user ??= new UserClient(this.client);
  }

  private _verificationSubmission?: VerificationSubmissionClient;

  get verificationSubmission(): VerificationSubmissionClient {
    return this._verificationSubmission ??= new VerificationSubmissionClient(this.client);
  }
}
