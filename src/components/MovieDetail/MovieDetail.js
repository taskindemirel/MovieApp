import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../redux-toolkit/movies/movieSlice'
import './MovieDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp, faFilm, faCalendar } from '@fortawesome/free-solid-svg-icons'

const MovieDetail = () => {
  
  const { imdbId } = useParams()
  console.log(imdbId)
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbId))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbId])

  return (
    <div className='movie-detail'>
      <div className="movie-section">
        {Object.keys(data).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
          <div className="section-left">
          <div className="movie-title">
            {data.Title}
          </div>
          <div className="movie-rating">
            <span>IMDB Rating <FontAwesomeIcon icon={(faStar)} /> : {data.imdbRating} </span>
            <span>IMDB Votes <FontAwesomeIcon icon={(faThumbsUp)} /> : {data.imdbVotes} </span>
            <span>IMDB Runtime <FontAwesomeIcon icon={(faFilm)} /> : {data.Runtime} </span>
            <span>Year <FontAwesomeIcon icon={(faCalendar)} /> : {data.Year} </span>
          </div>
          <div className="movie-plot">
            {data.Plot}
          </div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>

        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />
        </div>
        </>
        )}

      </div>
    </div>
  )
}

export default MovieDetail