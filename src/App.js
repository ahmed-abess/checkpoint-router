

import './App.css';
 import React, {useState,useEffect} from 'react'
import {film } from './Api/TMDB'
import FilmCrad from "./component/FilmCrad";
 import Container from "@material-ui/core/Container";
 import NavBar from './component/navBar'
import NewMovie from "./component/NewMovie";
 import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Film from './component/Film'



function App (){
    const[films,setFilms]=useState([])

    useEffect(() => {
            setFilms(film)
        },[]
     );

    function Search(e) {
        const text = e.target.value;
      if (text){
          const list=films.filter((el)=>
              el.title.indexOf(text)!==-1

          )
          setFilms(list)
      }else{
          setFilms(film)
      }

    };
    function addMovie(newMovie) {

        console.log(newMovie)
         const movies= [...films,...newMovie]
        setFilms(movies)
        console.log(films)
    }

    return (

            <Container  maxWidth="md">
                <NavBar Search={Search}/>
               <Router>
                   <Switch>
                       <Route path="/" exact >
                           <NewMovie addMovie={addMovie}/>
                           <FilmCrad Films={films}/>
                       </Route>
                       <Route path="/:id"  >
                           <Film/>

                       </Route>
                   </Switch>
               </Router>
            </Container>


    );


}

export default App;
