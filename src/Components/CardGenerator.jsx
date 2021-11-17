import React from 'react';
import { Card } from './Card';
import './CardGenerator.css';

export function CardGenerator(allComics){
        const comics = allComics.allComics.map((comic)=>{
            return{
                pageCount: comic.pageCount, 
                series: comic.series.name,
                thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
                title: comic.title,
                characters: comic.characters.items[0],
                issueNumber: comic.issueNumber,
                description: comic.description
            };
        });


    return(
        <>
            <div className ="cardsDiv">
                {console.log(comics)}
                {comics.map((comic)=>{
                    return(
                    <Card {...comic=comic}/>
                    );
                })}
            </div>
        </>
    );
}