import React, { useContext } from "react";
import  { MoviesContext } from "../contexts/MoviesContext";
import {useNavigate} from 'react-router-dom';
const SearchBar =()=>{
    const {searchMovie} = useContext(MoviesContext);
    const   handelFormSubmit = (event)=>{
        event.preventDefoult()
    }

    const navigator = useNavigate();

        return(
                <form onSubmit={handelFormSubmit}>
                    <div className="form-group row md-5" >
                        <div className="col-10">
                            <input type="text " className="form-control" placeholder="Search a movie" onChange={searchMovie}/>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-md btn-danger" onClick={()=>navigator("/add")} >Add Movie</button>
                        </div>
                    </div>
                </form>
        )
}

export default SearchBar;