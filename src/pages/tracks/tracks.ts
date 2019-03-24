import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Album} from "../../providers/deezer/Album";
import {DeezerProvider} from "../../providers/deezer/deezer";
import {Track} from "../../providers/deezer/Track";

@IonicPage()
@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html',
})
export class TracksPage {

  album: Album;
  tracks = new Array<Track>();
  audio = new Audio();
  playing: boolean;
  currentPos: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezerProvider: DeezerProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListArtistPage');
  }

  ionViewCanEnter() {
    this.album = this.navParams.get('theAlbum');
    this.deezerProvider.getAlbumTrackPromise(this.album).then(
      res => {
        this.tracks = new Array<Track>();
        this.tracks = res.data;

        for (let track of this.tracks) {
          track.duration_min = this.transform(track.duration);
        }
      });

    this.playing = false;
    this.currentPos = 1;
  }

  ionViewWillUnload() {
    this.pauseAudio();
  }

  transform(value: number): string {
    let minutes: number = Math.floor(value / 60);
    let seconds: number = (value - minutes * 60);
    let sec: string;
    if (seconds < 10) {
      sec = '0' + seconds.toString()
    } else {
      sec = seconds.toString()
    }
    return minutes.toString() + ':' + sec;
  }

  pauseAudio() {
    this.audio.pause();
    this.playing = false;
  }

  playAudio(track: Track) {
    this.audio.pause();

    this.audio = new Audio(track.preview);

    this.currentPos = track.track_position;
    console.log("Playing " + track.track_position);

    this.audio.play();

    this.playing = true;
  }

  resume() {
    this.audio.play();
    this.playing = true;
  }

  playNext() {
    if (this.currentPos < this.tracks.length) {
      this.playAudio(this.tracks[this.currentPos]);
    }
  }

  playPrevious() {
    if (this.currentPos > 3) {
      this.currentPos -= 2;
      this.playAudio(this.tracks[this.currentPos]);
    }
  }
}
