import ApiSlice from "api/slice";
import { WrappedInItems } from "types/common";

//types
import { INewsById, INewsItem } from "types/types";

export default class NewsSlice extends ApiSlice {
  static baseURL = ApiSlice.baseURL + `/news`;

  static GetNews = () => this.request<WrappedInItems<INewsItem>>("");
  static GetNewsByID = (id: string | string[] | undefined) => this.request<INewsById>(`/${id}`);
}
