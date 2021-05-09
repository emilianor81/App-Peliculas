import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
// import { Link } from 'react-router-dom';
import './Movie.css';


class Movie extends React.Component {

    componentDidMount() {
        const moveId = this.props.match.params.id; //capturo el id de la pelicula que se monto
        this.props.getMovieDetail(moveId)
        {console.log(moveId)}
    }

   
    render() {
        return (
           
            <div className="container" >
                Detalle de pelicula
                <h1> {this.props.movie.Title}</h1>
                <h1> {this.props.movie.Year}</h1>
                <h1> {this.props.movie.Type}</h1>
                <p>{this.props.movie.Plot}</p>
                 {this.props.movie.Poster} {/* preguntar como haria para que me aparezca esto en imagen */}
                {/* <div> 
                  <img src="{this.props.movie.Poster}" >  Imagen </img>
            
                </div> */}
               
                {console.log(this.props.movie.Poster)}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    };
}


function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);