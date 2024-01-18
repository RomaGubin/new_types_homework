export default class Movie {

  constructor(
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string,
    readonly time: number | string,
  ) {

  }
}