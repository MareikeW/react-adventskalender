import { useState, useEffect } from 'react';
import './App.css';
import Tuerchen from "./Tuerchen";

function App() {
  const [tage, setTage] = useState([]);
  
  //let randomTag = Math.floor(Math.random() * 24) + 1;
  // Erstellt 24 Felder, die nicht geöffnet sind.
  useEffect(() => {
    for (let i = 1; i <= 24; i++) {
        setTage(prevTage => {
            return [
                ...prevTage,
                {
                    id: i,
                    selected: false
                }
            ]
        })
    }
  }, []);
  
  
  /*const handleClick = ziffer => {
    tage.map(tag => {
      if (tag.id === ziffer) {
          tag.selected ? tag.selected = false : tag.selected = true                   
      }
      return tag;        
    })  
  }*/

  function createTuerchen() {
    const alleTuerchen = tage.map(tag => <Tuerchen key={tag.id} tag={tag.id} />);

    shuffleArray(alleTuerchen);

    return alleTuerchen;
  }
  
  function shuffleArray(alleTuerchen) {
    for (let i = 0; i < alleTuerchen.length - 1; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [alleTuerchen[i], alleTuerchen[j]] = [alleTuerchen[j], alleTuerchen[i]];
    }
    return alleTuerchen;
  }

  return (
    <div>
      <h1>Adventskalender</h1>
      <div className="kalender">
        {createTuerchen()}
      </div>
    </div>
  );
}

export default App;
