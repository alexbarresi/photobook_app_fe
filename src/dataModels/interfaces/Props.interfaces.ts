import { AlbumType } from "../types/Album.types";
import { PhotoType } from "../types/Photo.types";

export interface AlbumCardProps {
  album: AlbumType;
}

export interface PhotoCardProps {
  photo: PhotoType;
}

export interface InputFormProps {
  retrieveAlbums: (a: number) => void;
}
