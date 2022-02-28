import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import './Home.scss'
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux-toolkit/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()
  const movieText = "life"
  const seriesText = "stranger"


  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(seriesText))
  }, [dispatch])
  
  return (
    <div className="home">
      <div className="banner-image"></div>
      <MovieList />
    </div>
  );
};

export default Home;
