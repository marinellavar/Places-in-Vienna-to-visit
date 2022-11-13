import { useState } from 'react';
import './App.css';
import {data} from './data';
import React from 'react';

function App() {
  const [visit, setVisit] = useState(data);
  const removeVisit = (id) =>{
    let newVisit = visit.filter(visit => visit.id !==id);
    setVisit(newVisit)
  }
  return(
    <div>
      <div className='container'>
        <h1>{visit.length} Things to do in Vienna</h1>

      </div>
      {visit.map((places =>{
        const {id, location, image} = places;
        return(
          <div key={id}>
            <div className='container'>
              <p className='description'>{id} - {location}</p>
            </div>
            <div className='container'>
            <img src = {image} width = '300px' alt='pic'/>
            </div>

            <div className='container'>
              <button onClick={ () => removeVisit(id)}>Remove place</button>

            </div>
            
            
          </div>
        )
      }))}
      <div className='container'>
              <button onClick={ () => setVisit([])}>Delet all</button>

            </div>
            
          
    </div>
    
  )
 
}

export default App;
