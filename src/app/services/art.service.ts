import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http: HttpClient) { }

  getGalleryArt() {
    return this.http.get<any>("https://api.artic.edu/api/v1/artworks?page=1&limit=50");
  }

  getArtworkDetails(id: string | null) {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/${id}`);
  }

  getArtworkImage(imageId: string) {
    return this.http.get<any>(`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`, { responseType: 'blob' as 'json'});
  }

  getSearchResults(searchInput: string) {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/search?q=${searchInput}`);
  }
}
