import axios from 'axios';

axios.get('https://api.themoviedb.org/3/movie/').then(res => {
    console.log(res.data);
});