export interface AuthTokenProvider {
  getToken(): Promise<string | null | undefined>;
}
