/* eslint-disable import/prefer-default-export */
export function getImageURL(id) {
  if (id) return `https://image.tmdb.org/t/p/w500${id}`;
  return 'src/assets/noimage.png';
}
