import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';
import { Footer } from './components/Footer.jsx';
import './css/style.css';

export default function App() {
  const init = {
      header: { menus: [] }, 
      content: {  home: {}, 
                  about: {
                    majors: [],
                    jobs: []
                  }}
  };
  const [data, setData] = useState(init);

  useEffect(()=>{      
    const load = async () => {
      const response = await fetch("/data/portfolio.json");
      const jsonData = await response.json();       
      setData(jsonData);
    }
    load();  
  }, []);
 
  // console.log('jobs-->', data.content.about.jobs);
  

  return (
    <>
      <Header data={data.header} />
      <Content data={data.content}/>
      <Footer />
    </>
  );
}


