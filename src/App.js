import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://openfarm.cc/api/v1/crops/tomato");
      const json = await result.json();
      setData(json.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.attributes && (
        <div>
          <h2>{data.attributes.name}</h2>
          <img src={data.attributes.main_image_path} alt={data.attributes.name} />
          <h3>{data.attributes.binomial_name}</h3>
          <p>{data.attributes.description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
