
import React,{useState} from "react";
import './../styles/App.css';
import axios from "axios"

const App = () => {
  let [search, setSearch] = useState("")
  let [movie, setMovie] = useState("")

   function handleSearch(){
        axios.get("http://www.omdbapi.com",{
          "params":{
            apikey : "8fb387c2",
            type : "movie",
            t : "The Godfather"
          }
        }) 
        .then(response => {
             setMovie(response.data)
             setMovie("")
        })
        .catch(err => console.log(err))
   }

  return (
    <div>
         <h3>Search Movie</h3>
         <input type="text" placeholder="search" 
            onChange={e => setSearch(e.target.value)}
         />
         <button onClick={handleSearch}>Search</button>
         {
          movie && (
            <div>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster}  alt={movie.Title}/>
            </div>
          )
         }
    </div>
  )
}

export default App
