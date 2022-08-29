import ApiSlice from "api/slice";

//types
import { IGalleryItem, TGalleryType } from "types/types";

export default class GallerySlice extends ApiSlice {
  static baseURL = ApiSlice.baseURL;

  static GetGallery = (type: TGalleryType) => this.request<{ items: IGalleryItem[] }>(`/gallery?type=${type}`);
  static GetAllGallery = (type: TGalleryType) => this.request<{ items: IGalleryItem[] }>(`/all_gallery?type=${type}`);
}
