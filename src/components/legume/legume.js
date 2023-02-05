import React, { useState, useEffect } from 'react';
import './legume.css';

function Legume() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://openfarm.cc/api/v1/crops/lettuce");
      const json = await result.json();
      setData(json.data);
    };

    fetchData();
  }, []);

  return (
    <div className='legumeSolo'>
      {data.attributes && (
        <div>
          <h2>My {data.attributes.name}</h2>
          <div className='imgContainer'>
            <div className='imgSquare'>
              <img src={data.attributes.main_image_path} alt={data.attributes.name} />   
            </div>
          </div>  
          <ul>
            <li><p>Plantation Date: </p><p>16 Août 2022</p></li>
            <li><p>Species: </p><p>{data.attributes.name}</p></li>
            <li><p>Family: </p><p>{data.attributes.binomial_name}</p></li>
            <li><p>Status: </p><p>Healthy</p></li>
            <li><p>Humidity: </p><p>60%</p></li>
            <li><p>Sun: </p><p>30%</p></li>
            <li><p>Harvest: </p><p>16 Août 2022</p></li>
          </ul>     
        </div>
      )}

      <a href='/'>Recette liée</a>

      <button>Status Check</button>

    <h3><p>Récapitulatif du dernier bilan de santé</p></h3>
    <ul>
      <li><p>Last Check: </p><p>20 August 2022</p></li>
      <li><p>Status: </p><p>Good</p></li>
      <li><p>State: </p><p>Final</p></li>
      <li><p>Anomalies: </p><p>None</p></li>
    </ul>
    </div>
  );
};


export default Legume;