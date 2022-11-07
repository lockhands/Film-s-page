
import './index.css';
import { Info } from './components/Info';
import { SideBar } from './components/SideBar';
import { Login } from './components/Login';
import {getPokemon} from './api/index';
import { MovieList } from './components/MovieList';
import {useEffect,useState} from 'react';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setData(pokemonsRes[0]);
    
      setPokemons(pokemonsRes);
    };
   
    fetchPokemons();
   
   
  }, []);

 

  
  
  
  return (
    <div className="App">
   
      <SideBar />
     <Info title={data.title} back={data.backdrop_path} url={data.poster_path} overview={data.overview} rate={data.vote_average}/>
     <MovieList movies={pokemons} />
     <MovieList movies={pokemons} />
  
    </div>
  );
}

export default App;
