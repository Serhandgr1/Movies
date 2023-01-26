import React, { useContext  } from "react";
import serialize from 'form-serialize';
import { MoviesContext } from "../contexts/MoviesContext";
import {useNavigate} from 'react-router-dom';

  const AddMovie = ()=>{
   const {addMovie}= useContext(MoviesContext);
   const navigate = useNavigate();
   const  handelFormSubmit = (e) => {
        e.preventDefault();
        const newMovies  = serialize(e.target , { hash: true });
        addMovie(newMovies);
        navigate("/");
    }

        return(
            <div className="container">
            <form className="mt-5" onSubmit={handelFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
                <div className="form-group row">
                    <div className="form-group  col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name" required/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Özet bilgi</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="Ozetbilgi" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5" required></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
        )
    }
export default AddMovie;