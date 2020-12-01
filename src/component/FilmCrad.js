import React from 'react'
import Grid from "@material-ui/core/Grid";
import FilmItem from './FilmItem'
import { Alert,AlertTitle } from '@material-ui/lab';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles( (theme)=>(
    {
        card :{
            margin:  '20px 30px'
        }
    }
    )

);
const  FilmCrad=(props)=> {
    const classes = useStyles();
 const {Films}=props
        const FilmList= Films ?(
                Films.map(el=>{
                   return <FilmItem Film={el} key={el.id}/>

                })

        ):(
            <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    there is no movie — <strong>check it!</strong>
            </Alert>
        )

        return(
            <Grid container spacing={1} className={classes.card}>

                {FilmList}

            </Grid>
        )

}
export default FilmCrad;
