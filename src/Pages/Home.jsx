import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import './Home.css'
import { AppContext } from '../Contex/AppContexProvider';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [data, setData] = useState([]);
  const { changeBreedname } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
      let obj = res.data.message;
      let arr = [];
      for (let key in obj) {
        arr.push(key)
      }
      setData(arr);
      
    });
  }, []);
 
  const handleClick = (data) => {
    changeBreedname(data);
    console.log(data)
    
    navigate("/puppy");
}
 



  return (
    <section>
      <div className="nm">
        {data?.map((el, i) => { 
          return(
            <div className="brd" key={el+i} onClick={() => handleClick(el)}>
              <p className="name">{el}</p>
            </div>
          )
          })}
      </div>
    </section>
  );
}

export default Home