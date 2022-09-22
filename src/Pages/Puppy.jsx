import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Contex/AppContexProvider'
import "./Puppy.css"

const Puppy = () => {
  const { breedname } = useContext(AppContext)
  const [data, setdata] = useState(null);

  useEffect(() => {
    if (!breedname) {
      return
    }
    axios.get(`https://dog.ceo/api/breed/${breedname}/images`).then((res) => {
      console.log(res.data.message);
      setdata(res.data.message);
    });
  },[])
  return (
    <div className='ddiv'>
      {
        data?.map((el,i) => {
          return (
            <div key={el+i} className="ddog">
              <img src={el} alt="" className='dimg'/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Puppy