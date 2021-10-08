import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';



const MovieDetails = () => {
  
  


  // We import and then call the custom useParams Hook (function) provided to us by the react router dom package. This function returns an object, on which our URL paramter is a property. That is to say, the parameter (variable) which we defined in the Route that renders this component (up in App.js) will be the NAME of the property, and the string which we enter in that location in the browser's URL bar will be the VALUE of the property. In this case, we called the parameter `movieID` and so the property is called `.movieID`.
// Since we don't need the whole object, we destructure the `movieID` property out of the object, creating a local variable of the same name (`movieID`). We now can use the info from the URL anywhere in our component! Nice!

  const { movieID } = useParams();


  const [movie, setMovie] = useState({});
  
  useEffect( () => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac'
      }
    }).then((res) =>{
      console.log(res.data);
      setMovie(res.data);
    })
  }, [movieID]);
  const { original_title, tagline, overview, poster_path } = movie;
  return (
    <div className="poster">
      <div className="description">
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className="poster-image">
        {
          poster_path ?
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
            alt={`Movie poster for ${original_title}`}/>
          : null
        } 
      </div>
    </div>
  )
}

export default MovieDetails
        