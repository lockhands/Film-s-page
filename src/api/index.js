import axios from 'axios';

export const getPokemon = () => {
  return axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${1}')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};
