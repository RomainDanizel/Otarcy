import React, { useState, useEffect, useRef } from 'react';import './legume.css';

function Legume() {
  const [data, setData] = useState({});
  const checkButtonRef = useRef(null);
  const checkPopUpRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://openfarm.cc/api/v1/crops/lettuce");
      const json = await result.json();
      setData(json.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (checkButtonRef.current) {
      checkButtonRef.current.addEventListener('click', () => {
        checkPopUpRef.current.classList.remove('hidden');
      });
    }
  }, [checkButtonRef, checkPopUpRef]);

  const submitCheckUpRef = useRef(null);
  useEffect(() => {
    if (submitCheckUpRef.current) {
      submitCheckUpRef.current.addEventListener('click', () => {
        checkPopUpRef.current.classList.add('hidden');
      });
    }
  }, [submitCheckUpRef, checkPopUpRef]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

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

      <button className='CheckButton' ref={checkButtonRef}>Status Check</button>

    <h3><p>Récapitulatif du dernier bilan de santé</p></h3>
    <ul>
      <li><p>Last Check: </p><p>20 August 2022</p></li>
      <li><p>Status: </p><p>Good</p></li>
      <li><p>State: </p><p>Final</p></li>
      <li><p>Anomalies: </p><p>None</p></li>
    </ul>

    <div className='CheckPopUp hidden' ref={checkPopUpRef}>
        <form>
          <label>
            <p>Current State: </p>
            <input type="text" name="Status" />
          </label>
          {/* select a state: */}
          <label>
            <p>Current Status: </p>
            <select>
              <option value="Good">Good</option>
              <option value="Bad">Bad</option>
              <option value="Decent">Decent</option>
            </select>
          </label>
          <label>
            <p>Growth State: </p>
            <div className='chooseState'>
              <div>
                <p>Nothing</p>
                <input type="radio" name="nothing" />
              </div>
              <div>
                <p>Seedling</p>
                <input type="radio" name="seedling" />
              </div>
              <div>
                <p>Vegetative</p>
                <input type="radio" name="vegetative" />
              </div>
              <div>
                <p>Flowering</p>
                <input type="radio" name="flowering" />
              </div>
              <div>
                <p>Final</p>
                <input type="radio" name="final" />
              </div>
            </div>
          </label>
          <label>
            <p>Current Anomalies: </p>
            <input type="text" name="Anomalies" />
          </label>
          <button className='SubmitCheckUp' ref={submitCheckUpRef}>Submit</button>
        </form>
    </div>
    </div>
  );
};


export default Legume;