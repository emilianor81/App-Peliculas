import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies.map(movie => (
               <div className= 'contenedor' key={movie.imdbID}>
              <Link to={`/movie/${movie.id}`}>
                {movie.title}
                </Link>
              <button className='boton' onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
            </div>))}                                                     
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}


function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

// imdbID