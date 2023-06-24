
import React,{useState} from "react";
import './../styles/App.css';
import axios from "axios"


const App = () => {

  let [search, setSearch] = useState("")
  let [movies, setMovies] = useState(undefined)

  function handleSearch(event) {
      event.preventDefault()
       axios.get("http://www.omdbapi.com",{
          params:{
              apikey: "8fb387c2",
              s: search
          }
       })
       .then(response => {
          // console.log(response.data.Search)
          setMovies(response.data.Search)
          setSearch("")
       })
        .catch(err => console.log(err))
  }
   

  return(
    <div>
        <h2>Search Movie</h2>
        <form>
          <input type="text" placeholder="Enter Movie Name" 
          onChange={(e)=>{setSearch(e.target.value)}} value={search}
          />
          <button type="submit" onClick={handleSearch}>Search</button>
        </form>
          <ul>
            { 
            movies !== undefined ?  (
            movies.map((movie) => (
                  <li>
                        <h1>{movie.Title}</h1>
                        <img  src={movie.Poster} alt={movie.Title}/>
                  </li>
              ))) : (<p className="error">Invalid movie name. Please try again.</p>)
            }
          </ul>
    </div>
  )
}

export default App
