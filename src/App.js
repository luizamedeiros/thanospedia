import './App.css';
import { CardGenerator } from './Components/CardGenerator';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import Search from './Components/Search';

function App() {
  var [comics, setComics] = useState([]);

  useEffect(()=>{
    const GetComicOptions = async () => {
      var returnedComics = [];
      var md5Generator = require("md5");
      const timestamp = Date.now();
      const publicKey= 'be318ed4c1f49229ec253908a0463940';
      const privateKey = '6d2be3e43be5c7c5cbc3b14427b69ee7d1d66412';
      const hash=md5Generator(timestamp+privateKey+publicKey);
      const limit = '5';
  
      await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`)
      .then(res =>{
          return res.json();
      }).then((jsonParsed)=>{
        returnedComics = (jsonParsed.data.results);    
      })
      setComics(returnedComics);
  }
    GetComicOptions();
    
  }, [])
  console.log(typeof comics, comics)
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredComics = decidePage(query);

  function decidePage(query){
    if (!query) {
      console.log("No query");
      return <CardGenerator allComics={comics}/>
    }
    else{
      var filteredComics = [];
      function genCards(){
        return comics.filter((comic)=>{
          const comicTitle = comic.title.toLowerCase();
          return comicTitle.includes(query);
      })}
      filteredComics = genCards();
      return <CardGenerator allComics={filteredComics}/>
    }
  }
  
  return (
    
    <div className="App">
      <div id = "header">
        <Header/>
        <Search/>
      </div>
      {decidePage(query)}
    </div>
  );
}

export default App;
