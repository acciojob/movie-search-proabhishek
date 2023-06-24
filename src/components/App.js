
import React,{useState} from "react";
import './../styles/App.css';
import axios from "axios"

const App = () => {
  let [search, setSearch] = useState("")
  let [movie, setMovie] = useState("")

  console.log(movie)

   function handleSearch(){
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
         <input type="text" placeholder="search"  name="search-bar"
            onChange={e => setSearch(e.target.value)}
            value={search}
         />
         <button onClick={handleSearch}>Search</button>
         {
          movie && movie.Error==undefined ? (
            <div>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster}  alt={movie.Title}/>
            </div>
          ): (<h2 className="error"> Invalid movie name. Please try again.</h2>)
         }
    </div>
  )
}

export default App
