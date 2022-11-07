import { Card } from "./Card";
import { Info } from "./Info";

export const MovieList = ({movies}) =>{
    //   <Info title={movies[0].title} back={`http://image.tmdb.org/t/p/w185/${movies[0].backdrop_path}`} url={`http://image.tmdb.org/t/p/w185/${movies[0].poster_path}`} />
    const url="../../public/index copy.html";
    
    return(
<div>
        <h3 className="m-5 text-2xl txt-emerald-600 font-bold">Populares</h3>

        <div className="w-auto   h-96 item-center  overflow-x-auto overs-scroll-x-contain flex space-x-6">
                  {
                    movies.map( film =>{
                        
                        return (
                            <div>
                                <Card key={film.title} title={film.title} date={film.release_date} url={`http://image.tmdb.org/t/p/w185/${film.poster_path}`} />
                            </div>
                        );
                        
                    })
                }
            
            </div>
            </div>
    );
}