import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import { Settings } from "../../common/setting";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
} from "../../redux-toolkit/movies/movieSlice";
import "./MovieList.scss";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>
            {movies.Response ? (
              movies.Search.map((movie, idx) => {
                return <MovieCard key={idx} data={movie} />;
              })
            ) : (
              <div className="movies-error">
                <h3>{movies.Error} </h3>
              </div>
            )}
          </Slider>
        </div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">
          <Slider {...Settings}>
            {shows.Response ? (
              shows.Search.map((show, idx) => {
                return <MovieCard key={idx} data={show} />;
              })
            ) : (
              <div className="show-error">
                <h3>{shows.Error} </h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
