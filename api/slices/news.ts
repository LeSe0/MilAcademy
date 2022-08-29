import ApiSlice from "api/slice";
import { WrappedInItems } from "types/common";

//types
import { INewsItem } from "types/types";

export default class NewsSlice extends ApiSlice {
  static baseURL = ApiSlice.baseURL + `/news`;

  static GetNews = () => this.request<WrappedInItems<INewsItem>>("");
}
