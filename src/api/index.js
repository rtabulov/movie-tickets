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
}

export default new MovieAPI(API_KEY);
