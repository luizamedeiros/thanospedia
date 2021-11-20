import './App.css';
import { CardGenerator } from './Components/CardGenerator';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import Search from './Components/Search';
import {BrowserRouter as Router} from 'react-router-dom';

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
      const limit = '20';
  
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

  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredComics = decidePage(searchQuery);

  function decidePage(query){
    if (!query) {
      return comics;
    }
    return comics.filter((comic)=>{
    const comicMatched = comic.title.toLowerCase();
    return comicMatched.includes(query);
  })}
  
  return (
    <Router>
      <div className="App">
        <div id = "header">
          <Header/>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
        <CardGenerator allComics={filteredComics}/>
      </div>
    </Router>
  );
}

export default App;
