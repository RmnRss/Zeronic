import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Artist} from "../../providers/deezer/Artist";
import {DeezerProvider} from "../../providers/deezer/deezer";
import {Album} from "../../providers/deezer/Album";

/**
 * Generated class for the AlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {

  artist: Artist;
  albums = new Array<Album>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezerProvider: DeezerProvider) {

  }

  ionViewCanEnter() {
    // Recupération de l'artiste depuis la page précédente
    this.artist = this.navParams.get('selectedArtist');

    // Récupération de l'artiste complet puis de ses albums
    this.deezerProvider.getArtistPromise(this.artist.id.toString())
      .then(
        res => {
          this.artist = res;
          console.log(this.artist);
        })
      .then(() => this.deezerProvider.getAlbumsFromArtistPromise(this.artist.id)
        .then(res => this.albums = res.data)
      );

  }

  loadTracksPage(album: Album) {
    this.navCtrl.push('TracksPage', {theAlbum: album});
  }
}


