
const initialState = {
    moviesFavourites: [], //  listado de favoritas
    moviesLoaded: [], //{title: titanic, ID; 233736}, {tinaic se salvan, id }, {minions no choca, id }, {} , {}
    movieDetail: {}
  };

// recibe  type: REMOVE_MOVIE_FAVORITE,
    //  payload

  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload) //concat crea un nuevo arreglo c la peli agregada
        }//preguntar porque concat
    }


    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search //aca pisa el array moviesLoaded ya que no es necesario mantenerlos, (si a los otros dos x eso ....state)
        };
    }


    if (action.type === "GET_MOVIE_DETAIL") {
        console.log(action)
        return {
          ...state,
          movieDetail: action.payload 
        };
    }


    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter(m =>  m.id !== action.id )
        };
    }
    return state;
  }
  
  
  export default rootReducer;