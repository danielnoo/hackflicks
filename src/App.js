import {BrowserRouter as Router, Route} from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';


function App() {
  return (
    <Router>
    
      
      <div className="App">
        <h1>Harkflarx!</h1>
        <Route exact path="/">
          <Catalogue />
        </Route>

        {/* In the path below, we add a colon (':') before one of parts of our url path. This turns the word that comes immediately afterwards from a literal path string into a variable! Or, more accurately, it turns it into a parameter for our MovieDetails function (or whichever component you render inside the Route). Then, whatever value is passed into this position in the actual browser URL bar is the argument being passed into the place held by that parameter. This is called a URL param ("URL parameter"), and it will be accessible to us in the component using react router dom's custom built useParams Hook. */}

        <Route path="/movie/:movieID">
          <MovieDetails />
        </Route>
        

      </div>
    </Router>
  );
}



export default App;


// Go get a big ol' catalogue of movies from TheMovieDB (TMDB) and put them on the page.
    // STEPS:
        // Since this catalogue is only rendered on the home page (ie. the root url of our app), we know that we can put it in its own component, and that component will be conditionally rendered by a Route.
        // We will need to make an API call to TMDB right when the page loads.
            // We could use fetch for this API call, but let's use Axios because it's nice!
            // Since it happens right on page load, we can make this API call in a *useEffect with an empty dependency array*.
            // Once we get the data back from our API call, we need to put it somewhere, such that we can render it to the page. We can put it in *state*!
        // We need to set up our JSX such that our movie catalogue will appear on the page once we get the data from the API and put it in state (triggering a re-render).
        // We need to create a *Route* which will render our component.
    //
    // WHAT WE NEED:
        // - A component for my catalogue
        // - axios! (npm package to install)
        // - useEffect
        // - useState
        // - router (npm package to install)


// When the user clicks on a movie image, take them to a new url and show them details about the movie they clicked on.
    // STEPS:
        // We will need a component in which to show the movie details, and this component will be conditionally rendered as a Route.
        // The route at which the movie details are rendered will have a URL that includes that movie's unique TMDB id. We need to create that Route!
            // We want to be able to go get that ID from the url and use that for our API call. To do this, we can use the *useParams* Hook!
        // When the component mounts, we make an API call to TMDB to go get the movie details.
            // We already have *axios*, let's use that!
            // This will happen as soon as the component mounts, which means we will make the API call, once again, inside a *useEffect with an empty dependency array*.
            // Once we get data from TMDB, we need to put it in *state* (so that we can trigger a re-render, which will put the new data on the page).
        // We need to set up our JSX such that our movie details will appear on the page once we get the data from the API and put it in state (triggering a re-render).
        // We need to add a Link in our original catalogue component for each movie poster, which will take us to the movie details of that unique movie, using the ID of the movie.
    //
    // WHAT WE NEED:
        // - A component for our movie details
        // - a Route
        // - useParams
        // - axios (already installed above)
        // - useEffect
        // - useState
        // - a Link component (in the catalogue though, not the movie details)
