
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
            s : search
          }
        }) 
        .then(response => {
             console.log("response",response.data.Search)
             setMovie(response.data.Search)
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
          movie ? (
            <ul>
                {
                  movie.map(value =>(
                    <li>
                      <h2>{value.Title}</h2>
                      <img src={value.Poster}  alt={value.Title}/>
                    </li>
                  ))
                }
            </ul>
          ): (<h2 className="error"> Invalid movie name. Please try again.</h2>)
         }
    </div>
  )
}

export default App
