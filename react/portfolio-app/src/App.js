import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';
import { Footer } from './components/Footer.jsx';
import './css/style.css';
import { Categories } from './components/content/Categories.jsx';

export default function App() {
  const init = {
      header: { menus: [] }, 
      content: {  home: {}, 
                  about: {
                    majors: [], jobs: []
                  },
                  skills: {
                    coding: [], tools: [],  etc: []
                  },
                  work: {
                    categories: [], projects: []
                  },
                  testimonials: []
                },
      footer: { links: [] }
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

  return (
    <>
      <Header data={data.header} />
      <Content data={data.content}/>
      <Footer data={data.footer} />
    </>
  );
}


