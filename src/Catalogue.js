import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Catalogue = () => {
  
  const [ movies, setMovies ] = useState([]);
  
  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'true',
        include_video: 'true',
        page: 1,
        primary_release_year: 2015,
      },
    }).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    })
  }, []);
  
  return (
    <ul className="catalogue">
      {
        movies.map( (movie) => {
          return(
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`Poster for ${movie.original_title}`} />
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}


export default Catalogue
