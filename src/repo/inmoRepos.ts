// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { InmoApi } from '../api/inmoApi.js';
import { AdminRepoImpl } from './admin_repo.js';
import { AdministrativeDivisionRepoImpl } from './administrative_division_repo.js';
import { AdministrativeLevelRepoImpl } from './administrative_level_repo.js';
import { AmenityRepoImpl } from './amenity_repo.js';
import { AuthRepoImpl } from './auth_repo.js';
import { AuthSecurityRepoImpl } from './auth_security_repo.js';
import { CountryRepoImpl } from './country_repo.js';
import { CurrencyRepoImpl } from './currency_repo.js';
import { DocumentRepoImpl } from './document_repo.js';
import { FavouritesRepoImpl } from './favourites_repo.js';
import { FavouriteSearchRepoImpl } from './favourite_search_repo.js';
import { IdentificationRepoImpl } from './identification_repo.js';
import { InmoCategoryRepoImpl } from './inmo_category_repo.js';
import { InmoTypeRepoImpl } from './inmo_type_repo.js';
import { InquiryRepoImpl } from './inquiry_repo.js';
import { ListingRepoImpl } from './listing_repo.js';
import { ListingOfferRepoImpl } from './listing_offer_repo.js';
import { MasterRepoImpl } from './master_repo.js';
import { MediaRepoImpl } from './media_repo.js';
import { PasswordRepoImpl } from './password_repo.js';
import { PhoneRepoImpl } from './phone_repo.js';
import { PublisherRepoImpl } from './publisher_repo.js';
import { SearchRepoImpl } from './search_repo.js';
import { TokenRepoImpl } from './token_repo.js';
import { UserRepoImpl } from './user_repo.js';
import { VerificationSubmissionRepoImpl } from './verification_submission_repo.js';
import type { AdminRepo, AdministrativeDivisionRepo, AdministrativeLevelRepo, AmenityRepo, AuthRepo, AuthSecurityRepo, CountryRepo, CurrencyRepo, DocumentRepo, FavouritesRepo, FavouriteSearchRepo, IdentificationRepo, InmoCategoryRepo, InmoTypeRepo, InquiryRepo, ListingRepo, ListingOfferRepo, MasterRepo, MediaRepo, PasswordRepo, PhoneRepo, PublisherRepo, SearchRepo, TokenRepo, UserRepo, VerificationSubmissionRepo } from './index.js';

export interface InmoRepos {
  admin: AdminRepo;
  administrativeDivision: AdministrativeDivisionRepo;
  administrativeLevel: AdministrativeLevelRepo;
  amenity: AmenityRepo;
  auth: AuthRepo;
  authSecurity: AuthSecurityRepo;
  country: CountryRepo;
  currency: CurrencyRepo;
  document: DocumentRepo;
  favourites: FavouritesRepo;
  favouriteSearch: FavouriteSearchRepo;
  identification: IdentificationRepo;
  inmoCategory: InmoCategoryRepo;
  inmoType: InmoTypeRepo;
  inquiry: InquiryRepo;
  listing: ListingRepo;
  listingOffer: ListingOfferRepo;
  master: MasterRepo;
  media: MediaRepo;
  password: PasswordRepo;
  phone: PhoneRepo;
  publisher: PublisherRepo;
  search: SearchRepo;
  token: TokenRepo;
  user: UserRepo;
  verificationSubmission: VerificationSubmissionRepo;
}

export function createInmoRepos(api: InmoApi): InmoRepos {
  return {
    admin: new AdminRepoImpl(api),
    administrativeDivision: new AdministrativeDivisionRepoImpl(api),
    administrativeLevel: new AdministrativeLevelRepoImpl(api),
    amenity: new AmenityRepoImpl(api),
    auth: new AuthRepoImpl(api),
    authSecurity: new AuthSecurityRepoImpl(api),
    country: new CountryRepoImpl(api),
    currency: new CurrencyRepoImpl(api),
    document: new DocumentRepoImpl(api),
    favourites: new FavouritesRepoImpl(api),
    favouriteSearch: new FavouriteSearchRepoImpl(api),
    identification: new IdentificationRepoImpl(api),
    inmoCategory: new InmoCategoryRepoImpl(api),
    inmoType: new InmoTypeRepoImpl(api),
    inquiry: new InquiryRepoImpl(api),
    listing: new ListingRepoImpl(api),
    listingOffer: new ListingOfferRepoImpl(api),
    master: new MasterRepoImpl(api),
    media: new MediaRepoImpl(api),
    password: new PasswordRepoImpl(api),
    phone: new PhoneRepoImpl(api),
    publisher: new PublisherRepoImpl(api),
    search: new SearchRepoImpl(api),
    token: new TokenRepoImpl(api),
    user: new UserRepoImpl(api),
    verificationSubmission: new VerificationSubmissionRepoImpl(api),
  };
}
