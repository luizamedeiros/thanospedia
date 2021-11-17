import './App.css';
import { CardGenerator } from './Components/CardGenerator';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header';

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

  return (
    <div className="App">
      <Header/>
      <CardGenerator allComics={comics}/>
    </div>
  );
}

export default App;
