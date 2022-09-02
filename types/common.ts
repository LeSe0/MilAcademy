export type RequestOptions = null | {
  auth?: boolean;
  headers?: Record<string, any>;
  responseType?: "json" | "blob" | "arraybuffer";
  useBaseUrl?: boolean;
};

export type ResponseModel<T = any> = {
  meta: { error: { message: string; code: number } | null; status: number };
  data: T;
};

export type WrappedInItems<T> = {
  items: T[];
};
