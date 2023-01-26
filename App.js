import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import MoviesContextProvider from "../contexts/MoviesContext";
import {
    BrowserRouter as Router,
    Route,
    Routes 
  } from "react-router-dom";
const App = () => {
    return (
        <MoviesContextProvider> 
            <Router>
            <Routes>
            <Route path="/" exact element={
            <React.Fragment>
                    <div className="container">
                          <div className="row">
                    <div className="col-lg-12 mb-3">               
                    <SearchBar/>
                   </div>
                </div>           
                    <MovieList/>
                    </div>
              </React.Fragment>
          }/>
            <Route path="/add" element={<AddMovie/>}/>
        </Routes>
        </Router>
        </MoviesContextProvider>
    )
}

export default App;
