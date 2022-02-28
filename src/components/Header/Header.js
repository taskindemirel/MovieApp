import "./Header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux-toolkit/movies/movieSlice";


const Header = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
   e.preventDefault()
   if (!term) return (alert("Aramak için bir kelime girmediniz!"))
   dispatch(fetchAsyncMovies(term))
   dispatch(fetchAsyncShows(term))
   setTerm("")
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={term} placeholder="Bir film ya da dizi arayın" onChange={(e)=> setTerm(e.target.value)} />
          <button type="submit"><FontAwesomeIcon icon={(faMagnifyingGlass)} /></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Header;
