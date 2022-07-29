import { Photo } from "./Photo";


export type AlbumType = {
  id: number;
  userId: number;
  title: string;
  photoList: Photo[];
}