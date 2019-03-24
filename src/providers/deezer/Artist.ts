export class Artist {

  constructor() {

  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _link: string;

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  private _picture: string;

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  private _picture_small: string;

  get picture_small(): string {
    return this._picture_small;
  }

  set picture_small(value: string) {
    this._picture_small = value;
  }

  private _picture_medium: string;

  get picture_medium(): string {
    return this._picture_medium;
  }

  set picture_medium(value: string) {
    this._picture_medium = value;
  }

  private _picture_big: string;

  get picture_big(): string {
    return this._picture_big;
  }

  set picture_big(value: string) {
    this._picture_big = value;
  }

  private _picture_xl: string;

  get picture_xl(): string {
    return this._picture_xl;
  }

  set picture_xl(value: string) {
    this._picture_xl = value;
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

  private _nb_album: number;

  get nb_album(): number {
    return this._nb_album;
  }

  set nb_album(value: number) {
    this._nb_album = value;
  }

  private _nb_fan: number;

  get nb_fan(): number {
    return this._nb_fan;
  }

  set nb_fan(value: number) {
    this._nb_fan = value;
  }
}
