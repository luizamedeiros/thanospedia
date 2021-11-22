import './App.css';
import { CardGenerator } from './Components/CardGenerator';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import Search from './Components/Search';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NotFound } from './Components/NotFound';

function App() {
  var [comics, setComics] = useState([]);

  useEffect(()=>{
    const GetComicOptions = async () => {
      var returnedComics = [];
      var md5Generator = require("md5");
      const timestamp = Date.now();
      const publicKey= '';
      const privateKey = '';
      const hash=md5Generator(timestamp+privateKey+publicKey);
      const limit = '20';
      const dateDescriptor="lastWeek";
  
      await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&dateDescriptor=${dateDescriptor}`)
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
        <Routes>
          <Route path="/" element={<CardGenerator allComics={filteredComics}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
