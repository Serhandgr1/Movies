import React, { useContext , useState} from "react";
import {Modal} from "react-bootstrap";
import uuid4 from "uuid4";
import { MoviesContext } from "../contexts/MoviesContext";
const  MovieList  = () => {
    const {deleteMovie} = useContext(MoviesContext);
    const {filterdMovies} = useContext(MoviesContext);
    const [show , setShow] = useState(false);
    const [overview , setOverview] = useState("");
    const [rating , setRating] = useState("");
    const [Img , setRImg] = useState("");
    const handelShow =(movie)=>{
        setOverview(movie.overview);
        setRating(movie.rating);
        setRImg(movie.imageURL);
        setShow(true);
    }
    const handelClose =()=>{
        setShow(false);
    }
    
    return (
        <>
        <div className="row">
                {filterdMovies.map((movie) => (
                    <div className="col-lg-4" key={uuid4()}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sampel Movies" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text ">{movie.ozetbilgi}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" className="btn btn-md btn-outline-danger" onClick={(event)=>deleteMovie(movie)}>DELETE</button>
                                    <button type="button" className="btn btn-md btn-outline-danger" onClick={(event)=>handelShow(movie)}>Detail</button>
                                    <h2><span style={{ backgroundColor: 'green' }} className="badge badge-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>             
                        <Modal show={show} onHide={handelClose}>
                        <div>
                                <img src={Img}/><br/><br/>
                                <p>Movie Detail : <br/> {overview}</p><br/><br/>
                                <p>Rating: {rating}</p>
                        </div>
                        </Modal>
                    </div>
            
               ))}</div>
                  </>
            
        )
    }

export default MovieList;