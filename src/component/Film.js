import React from 'react'
import {Link,useParams} from'react-router-dom'
import getImage, {film} from'../Api/TMDB'
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import {  deepPurple } from '@material-ui/core/colors';
import {Avatar} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import {CardMedia} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginRight:10
    },
    root:{
        flexGrow:1,
       padding:'10px 20px',
        margin:'10px 0'
    },
    paper:{
        padding: 10
    },
    item:{
        padding: 10,
        justifyItems:'center',
        alignItems:'center',
        marginBottom: 10,
        borderBottom:'2px solid #9f5f80'
    },
    frame:{
        marginTop:20
    }

}));
function Film() {
    const {id}=useParams()
   const filmItem=film.filter(el=>{
       return id ==el.id
   })

    const classes = useStyles();
    return(
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>

                    <Grid container direction="row" className={classes.item}>

                        <Avatar className={classes.purple}>F</Avatar>
                        <Typography variant="h5" component="h2" color="primary">{filmItem[0].title}</Typography>

                    </Grid>
                    <Grid container direction="column">
                        <img src={getImage(filmItem[0].poster_path)} alt="poster"/>
                        <Grid container direction="row">
                            <Typography variant="h6"color="primary">Description:</Typography>
                        <Typography variant="body2" align="justify">{filmItem[0].overview}</Typography>
                        </Grid>
                        <Grid container direction="column" className={classes.frame}>
                            <Typography variant="h6" color="primary">trailer:</Typography>
                            <iframe src={filmItem[0].trailer}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen />
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default Film
