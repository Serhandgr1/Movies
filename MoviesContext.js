import {createContext , useState , useEffect} from 'react';
import axios from "axios";
export const MoviesContext = createContext();

const MoviesContextProvider =(props)=>{

    const [movies , setMovies ]=useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://localhost:3002/movies");
            setMovies(response.data);
            console.log(response.data);
        };
        getUsers(); // run it, run it
      }, [movies.length]);

      const  deleteMovie = async (movie)=>{
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = movies.filter(m => m.id !== movie.id);
        setMovies(newMovieList);
    };

    const  searchMovie = (event) => {
        // console.log(event.target.value);
        setSearchQuery( event.target.value );
    };
    const addMovie = async (movie)=>{
        await axios.post(`http://localhost:3002/movies/`, movie)
        setMovies(movies.concat([movie]));
    };

    let filterdMovies = movies.filter(
        (movie) => {
            return movie.name.indexOf(searchQuery) !== -1 
        }
    );

    return(
        <MoviesContext.Provider   value={{movies, deleteMovie , searchMovie , addMovie , filterdMovies}}>
             {props.children}
       </MoviesContext.Provider>
    );

    }

export default MoviesContextProvider;