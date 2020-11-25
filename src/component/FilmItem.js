import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import getImage from '../Api/TMDB'
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#6a1b9a',
    },
    favorite:{ backgroundColor: 'red'},
    vote:{float:'right',
    marginLeft:'auto'}
}));

const FilmItem=(props)=>{

const {Film}=props

    const classes = useStyles();

    return(
        <Grid item xs={6} key={Film.id}>
            <Card className={classes.root} key={Film.id}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            F
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={Film.title}
                    subheader={Film.release_date}
                />
                <CardMedia
                    className={classes.media}
                    image={getImage(Film.poster_path)}
                    title={Film.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {Film.overview}
                    </Typography>
                </CardContent>
                <Rating
                    name="simple-controlled"
                    max={10}
                    value={Film.vote_average}
                    precision={0.5}
                    className={classes.vote}

                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                </CardActions>

            </Card>
        </Grid>
    )
}
export default FilmItem;
