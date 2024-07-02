export enum HttpRequestStatus {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}

export interface ListEntityState<T> {
  entities: T[];
  listStatus: HttpRequestStatus;
}
