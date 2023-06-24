
import React,{useState} from "react";
import './../styles/App.css';
import axios from "axios"

const App = () => {
  let [search, setSearch] = useState("")
  let [movie, setMovie] = useState("")

  console.log(movie)

   function handleSearch(e){
        e.preventDefault();
        axios.get("https://www.omdbapi.com",{
          "params":{
            apikey : "8fb387c2",
            type : "movie",
            t : search
          }
        }) 
        .then(response => {
             console.log("response",response.data)
             setMovie(response.data)
             setSearch("")
        })
        .catch(err => console.log(err))
   }

  return (
    <div>
         <h3>Search Movie</h3>
         <form>
         <input type="text" placeholder="search"  name="search-bar"
            onChange={e => setSearch(e.target.value)}
            value={search}
         />
         <button  type="submit" onClick={handleSearch}>Search</button>
         </form>
         {
          movie && movie.Error==undefined ? (
            <ul>
                <li>
                  <h2>{movie.Title}</h2>
                  <img src={movie.Poster}  alt={movie.Title}/>
                </li>
            </ul>
          ): (<h2 className="error"> Invalid movie name. Please try again.</h2>)
         }
    </div>
  )
}

export default App
