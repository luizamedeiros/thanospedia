import React from 'react';
import Swal from 'sweetalert2';
import './CardGenerator.css'

export function Card(cardComic){
    // const noInfo = "Oh no! The Avengers found out about your site and stole away some data! This description isn't available!"
    // if (cardComic.description==null){
    //     cardComic.description = noInfo;
    // }
    // if (cardComic.characters!=[]){
    //     cardComic = {characters: noInfo};
    // }
    // else{
    //     let i = 0;
    //     while (i<cardComic.characters.length){
    //         cardComic.characters += `,  ${cardComic.characters.name}`;
    //         i++;
    //     }
    // }
    return(
        <>
            <img className="card" src= {cardComic.thumbnail} onClick={()=>{
                Swal.fire({
                    title: cardComic.title,
                    html: "<strong> Resumo: </strong>" + cardComic.description + "<br/>"
                    + "<strong>Número de páginas: </strong>" + cardComic.pageCount,
                    imageUrl: cardComic.thumbnail,
                    imageHeight: 200,
                    showConfirmButton: false,
                    showCloseButton: true
                })
            }}/>
        </>
    )
}