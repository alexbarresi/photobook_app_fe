export class Photo {
    private id: number;
    private albumId: number;
    private url: string;
    private thumbnailUrl: string;
    private title: string;
  
    constructor(id: number, albumId: number, url: string, thumbnailUrl: string, title: string) {
      this.id = id;
      this.albumId = albumId;
      this.url = url;
      this.thumbnailUrl = thumbnailUrl;
      this.title = title;
    }
  }
