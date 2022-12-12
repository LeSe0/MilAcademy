//slices
import ApiSlice from "./slice";
import NewsSlice from "./slices/news";

export default class Api extends ApiSlice {
  static news = NewsSlice;
}
