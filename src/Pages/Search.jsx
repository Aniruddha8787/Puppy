import React from "react";
import {  useState,  } from "react";
import axios from "axios";
import './Search.css'
import "./Puppy.css"



const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const handleSearch = () => {
    axios.get(`https://dog.ceo/api/breed/${search}/images`).then((res) => {
      setData(res.data.message);
    });
  }
  

  
    
    
  return (
    <>
      <div className="frm">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="inp"
        />
        <button type="submit" className="inpb" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="dt">
        <div className="ddiv">
          {data?.map((el, i) => {
            return (
              <div key={el + i} className="ddog">
                <img src={el} alt="" className="dimg" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
