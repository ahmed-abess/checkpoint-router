import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core";
import {Fab} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";
import TextField from '@material-ui/core/TextField';


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '70%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        margin: '0 auto'
    },

    button :{
        float:  'right',
        marginTop :'10px',
        margin: '20px'
    },
    form:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    texterea:{
        width:'80% !important'
    }
}));


export default function NewMovie(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [title,setTitle]=useState("")
    const [vote,setVote]=useState("")
    const [Overview,setOverview]=useState("")
    const {addMovie}= props



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const chengeTitle=(e)=>{
            let titles=e.target.value
        setTitle(titles)

    }
    const chengeVote=(e)=>{
        let vote=e.target.value
        setVote(vote)

    }
    const chengeOverview=(e)=>{
        let overview=e.target.value
        setOverview(overview)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let newMovie=[{
                popularity: 1413.62,
                vote_count: 346,
                video: false,
                poster_path: "/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                id: Math.random()*1000000000000,
                adult: false,
                backdrop_path: "/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
                original_language: "en",
                original_title: "2067",
                genre_ids: [
                    878,
                    53,
                    18
                ],
                title: title,
                vote_average: vote,
                overview: Overview,
                release_date: "2020-10-01",
                trailer:"https://www.youtube.com/watch?v=vz-gdEL_ae8"
            }]
        addMovie(newMovie)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form className={classes.form}  autoComplete="off" onSubmit={(e)=>{ handleSubmit(e) }}>

                <TextField id="title"  name="title" label="Title" variant="outlined" onChange={(e)=>{chengeTitle(e)}}  />
                <TextField id="vote_average" label="vote average" variant="outlined" onChange={(e)=>{chengeVote(e)}}/>
                <TextField
                    id="outlined-multiline-static"
                    label="Overview"
                    multiline
                    rows={5}
                    variant="outlined"
                    className={classes.texterea}
                    onChange={(e)=>{chengeOverview(e)}}
                /><br/>

                <Button variant="contained" color="primary" type="submit" value="submit">Submit</Button>
            </form>

        </div>
    );

    return (
        <div>
            <Fab color="primary" aria-label="add" className={classes.button}  onClick={handleOpen}>
               <AddBox/>
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
