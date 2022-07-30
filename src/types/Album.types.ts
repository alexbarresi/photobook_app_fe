import { Photo } from "./Photo.types";


export type AlbumType = {
  id: number;
  userId: number;
  title: string;
  photoList: Photo[];
}