export interface IImage {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}
export interface ImageModalProps {
  isVisible: boolean;
  image: any;
  onClose: () => void;
}

export interface ImageGridProps {
  images: Array<{id: number; previewURL: string; largeImageURL: string}>;
  setPreviewImage: (image: any) => void;
  setIsPreviewOpened: (isOpen: boolean) => void;
}
