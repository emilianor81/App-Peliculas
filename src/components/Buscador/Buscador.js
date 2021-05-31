import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Buscador.css";
// import styles from "./Buscador.css";
import { addMovieFavorite, getMovies } from "../../actions";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title); // titanic y toda su info
  }

  render() {
    const { title } = this.state;
    return (
      <div className="form">
        <h2 className="titulo">Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              className="input"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies.map((movie) => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button
                className="buton"
                onClick={() =>
                  this.props.addMovieFavorite({
                    title: movie.Title,
                    id: movie.imdbID,
                  })
                }
              >
                Fav
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

//

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)), //titanic
  };
}

//

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
