export class Album {
  constructor() {
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _cover: string;

  get cover(): string {
    return this._cover;
  }

  set cover(value: string) {
    this._cover = value;
  }

  private _cover_small: string;

  get cover_small(): string {
    return this._cover_small;
  }

  set cover_small(value: string) {
    this._cover_small = value;
  }

  private _cover_medium: string;

  get cover_medium(): string {
    return this._cover_medium;
  }

  set cover_medium(value: string) {
    this._cover_medium = value;
  }

  private _cover_big: string;

  get cover_big(): string {
    return this._cover_big;
  }

  set cover_big(value: string) {
    this._cover_big = value;
  }

  private _cover_xl: string;

  get cover_xl(): string {
    return this._cover_xl;
  }

  set cover_xl(value: string) {
    this._cover_xl = value;
  }

  private _tracklist: string;

  get tracklist(): string {
    return this._tracklist;
  }

  set tracklist(value: string) {
    this._tracklist = value;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _release_date: string;

  get release_date(): string {
    return this._release_date;
  }

  set release_date(value: string) {
    this._release_date = value;
  }

  private _explicit_lyrics: boolean;

  get explicit_lyrics(): boolean {
    return this._explicit_lyrics;
  }

  set explicit_lyrics(value: boolean) {
    this._explicit_lyrics = value;
  }
}
