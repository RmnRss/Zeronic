import {Album} from "./Album";
import {Artist} from "./Artist";

export class Track {

  constructor() {
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _readable: boolean;

  get readable(): boolean {
    return this._readable;
  }

  set readable(value: boolean) {
    this._readable = value;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _title_short: string;

  get title_short(): string {
    return this._title_short;
  }

  set title_short(value: string) {
    this._title_short = value;
  }

  private _title_version: string;

  get title_version(): string {
    return this._title_version;
  }

  set title_version(value: string) {
    this._title_version = value;
  }

  private _link: string;

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  private _duration: number;

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  private _rank: number;

  get rank(): number {
    return this._rank;
  }

  set rank(value: number) {
    this._rank = value;
  }

  private _explicit_lyrics: boolean;

  get explicit_lyrics(): boolean {
    return this._explicit_lyrics;
  }

  set explicit_lyrics(value: boolean) {
    this._explicit_lyrics = value;
  }

  private _explicit_content_lyrics: number;

  get explicit_content_lyrics(): number {
    return this._explicit_content_lyrics;
  }

  set explicit_content_lyrics(value: number) {
    this._explicit_content_lyrics = value;
  }

  private _explicit_content_cover: number;

  get explicit_content_cover(): number {
    return this._explicit_content_cover;
  }

  set explicit_content_cover(value: number) {
    this._explicit_content_cover = value;
  }

  private _preview: string;

  get preview(): string {
    return this._preview;
  }

  set preview(value: string) {
    this._preview = value;
  }

  private _artist: Artist;

  get artist(): Artist {
    return this._artist;
  }

  set artist(value: Artist) {
    this._artist = value;
  }

  private _album: Album;

  get album(): Album {
    return this._album;
  }

  set album(value: Album) {
    this._album = value;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _track_position: number;

  get track_position(): number {
    return this._track_position;
  }

  set track_position(value: number) {
    this._track_position = value;
  }

  private _duration_min: string;

  get duration_min(): string {
    return this._duration_min;
  }

  set duration_min(value: string) {
    this._duration_min = value;
  }
}
