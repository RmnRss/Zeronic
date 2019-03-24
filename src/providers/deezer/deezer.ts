import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Album} from "./Album";

/*
  Generated class for the DeezerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeezerProvider {

  constructor(public http: HttpClient) {
    console.log('Starting Deezer Provider...');
  }

  getTrendingArtistsPromise(): Promise<any> {
    const url: string = "https://api.deezer.com/chart/0/artists";
    console.log("Promise to " + url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(success => resolve(success));
    });
  }

  getSearchByArtistsPromise(artistName: string): Promise<any> {
    const url: string = "https://api.deezer.com/search/artist?q=" + artistName;
    console.log("Promise to " + url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(success => resolve(success));
    });
  }

  getArtistPromise(id: string): Promise<any> {
    const url: string = "https://api.deezer.com/artist/" + id;
    console.log("Promise to " + url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(success => resolve(success));
    });
  }


  getAlbumsFromArtistPromise(artistId: number): Promise<any> {
    console.log("id : " + artistId)
    const url: string = "https://api.deezer.com/artist/id/albums".replace("id", artistId.toString())
    console.log("Promise to " + url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(success => resolve(success));
    });
  }

  getAlbumTrackPromise(album: Album): Promise<any> {
    console.log("id : " + album.id)
    const url: string = "https://api.deezer.com/album/id/tracks".replace("id", album.id.toString())
    console.log("Promise to " + url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(success => resolve(success));
    });
  }
}
