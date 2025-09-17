import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';
import { Footer } from './components/Footer.jsx';
import './css/style.css';

export default function App() {
  const [data, setData] = useState({});
  useEffect(()=>{    
    fetch("/data/portfolio.json")
        .then((response) => response.json() )
        .then( jsonData => setData(jsonData))
        .catch(error => console.log(error));
  }, []);

  // console.log("data--> ", data.header);  

  return (
    <>
      <Header data={data.header} />
      <Content />
      <Footer />
    </>
  );
}


