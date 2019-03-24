import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DeezerProvider} from "../../providers/deezer/deezer";
import {Artist} from "../../providers/deezer/Artist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  searchTerms: string = '';
  artistsToDisplay = new Array<Artist>();

  message: string;
  nbResult: number;

  constructor(public navCtrl: NavController, public deezerProvider: DeezerProvider) {

  }

  ionViewCanEnter() {
    this.artistsToDisplay = new Array<Artist>();

    this.deezerProvider.getTrendingArtistsPromise()
      .then(results => {
        this.artistsToDisplay = results.data;
        this.message = "Trending Artists";
      })
  }

  search(terms: string) {
    this.artistsToDisplay = new Array<Artist>();

    this.deezerProvider.getSearchByArtistsPromise(terms)
      .then(searchResults => {
        this.artistsToDisplay = searchResults.data;
        this.nbResult = this.artistsToDisplay.length;
        this.message = "Search";
      })
  }

  loadArtistPage(theArtist: Artist) {
    this.navCtrl.push('AlbumsPage', {selectedArtist: theArtist});
  }

}
