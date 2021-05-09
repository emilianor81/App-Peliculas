
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";


export function removeMovieFavorite (id){ //payload es solo el id, no payload.id, solo id porque eso le paso cuando lallamo a la action
  return {
      type: REMOVE_MOVIE_FAVORITE,
      id
  }
}

export function addMovieFavorite(payload) { // una pelicula en particular el payload
    return { type: ADD_MOVIE_FAVORITE, payload }; //
  }
  

export function getMovies(titulo) {//parametro nombre titanic
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES , payload: json });//aqui el payload serian varias peliculas 
        });
    };
  }

  export function getMovieDetail(id){
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)

        .then(response => response.json())
        .then(json => {
          console.log(json)

          dispatch({ type: GET_MOVIE_DETAIL, payload: json }); //aqui el payload seria una pelicula
        });
    };
    // return {
    //     type: GET_MOVIE_DETAIL,
    //     payload
    // }
  }
  // const GET_MOVIES = "GET_MOVIES"