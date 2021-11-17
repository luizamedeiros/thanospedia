import React from 'react';
import infinityGauntlet from '.././assets/infinityGauntlet.png';
import './CardGenerator.css';
import {TextField} from '@material-ui/core';
import {useStyles} from '../assets/themes/themes';


export const Header = ()=>{
    const classes = useStyles();
    return(
        <div id = "header">
            <img id="gauntlet" src={infinityGauntlet}/>
            <h1>ThanosPedia</h1>
            <TextField label="Search" variant="standard" InputLabelProps={{className: classes.floatingLabelFocusStyle}}/>
        </div>
    )
}