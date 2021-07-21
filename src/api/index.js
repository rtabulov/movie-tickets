import axios from 'axios';
import genres from './genres';

class MovieAPI {
  constructor(key) {
    this.key = key;
    this.base = 'https://api.themoviedb.org/3';
  }

  static genres = genres;

  makeRequest(path) {
    const url = new URL(`${this.base}${path}`);
    url.searchParams.set('api_key', this.key);

    return axios.get(url).then(({ data }) => {
      const results = data.results.map((item) => {
        const zxc = item.genre_ids?.map((g) => MovieAPI.genres[g]);
        return { ...item, genres: zxc };
      });
      return { ...data, results };
    });
  }

  getDiscover() {
    return this.makeRequest(`/discover/movie?sort_by=popularity.desc&page=1`);
  }
}

export default new MovieAPI('29668f99b2fbd756b631e3148422572b');
