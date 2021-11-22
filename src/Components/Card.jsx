import React from 'react';
import Swal from 'sweetalert2';
import './style.css'

export function Card(cardComic){
    const noInfo = "<em> Opa! Parece que os Vingadores descobriram seu plano e roubaram essa informação! </em>";

    return(
        <>
            <img className="card" src= {cardComic.thumbnail} alt={`Capa do quadrinho ${cardComic.title}`} onClick={()=>{
                Swal.fire({
                    title: cardComic.title,
                    html: "<strong> Resumo: </strong>" + (cardComic.description? cardComic.description : noInfo) + "<br/>"
                    + "<strong>Número de páginas: </strong>" +  (cardComic.pageCount? cardComic.pageCount : noInfo) + "<br/>" 
                    + "<strong> Série: </strong>" + (cardComic.series? cardComic.series: noInfo) + "<br/>" 
                    + "<strong> Número: </strong>" + (cardComic.issueNumber? cardComic.issueNumber: noInfo), 
                    imageUrl: cardComic.thumbnail,
                    imageHeight: 200,
                    showConfirmButton: false,
                    showCloseButton: true,
                    customClass: "modal",
                    imageAlt: "Capa do quadrinho"
                })
            }}/>
        </>
    )
}