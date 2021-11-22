import React from 'react';
import infinityGauntlet from '.././assets/infinityGauntlet.png';
import './style.css';

export const Header = ()=>{
    return(
            <h1><img id="gauntlet" src={infinityGauntlet}/>ThanosPedia</h1>
    )
}