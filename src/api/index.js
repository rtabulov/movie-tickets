import axios from 'axios';
import genres from './genres';

const API_KEY = '29668f99b2fbd756b631e3148422572b';

class MovieAPI {
  constructor(key) {
    this.#key = key;
    this.#base = 'https://api.themoviedb.org/3';
  }

  static #genres = genres;

  static #mapGenres(data) {
    const results = data.results.map((item) => {
      const genreArray = item.genre_ids?.map((g) => MovieAPI.#genres[g]);
      return { ...item, genres: genreArray };
    });
    return { ...data, results };
  }

  #key;

  #base;

  #buildURL(path) {
    const url = new URL(`${this.#base}${path}`);
    return this.#addKey(url);
  }

  #addKey(url) {
    url.searchParams.set('api_key', this.#key);
    return url;
  }

  getDiscover() {
    return axios
      .get(this.#buildURL(`/discover/movie?sort_by=popularity.desc&page=1`))
      .then(({ data }) => MovieAPI.#mapGenres(data));
  }

  getMovie(id) {
    return axios
      .get(
        this.#buildURL(`/movie/${id}?append_to_response=credits,release_dates`),
      )
      .then(({ data }) => {
        const director = data.credits.crew.find(
          (item) => item.job === 'Director',
        )?.name;

        const screenplay =
          data.credits.crew.find((item) => item.job === 'Screenplay')?.name ||
          data.credits.crew.find((item) => item.job === 'Writer')?.name;

        const certification = data.release_dates.results
          .find((item) => item.iso_3166_1 === 'US')
          ?.release_dates.find((item) => item.type >= 3).certification;
        return {
          ...data,
          certification,
          director,
          screenplay,
        };
      });
  }
}

export default new MovieAPI(API_KEY);
