import React, { useEffect } from 'react'
import PageStruct from '../Components/PageStruct'
import SideBar from '../Components/SideBar';
// import { useContext } from 'react';
// import { store } from '../Components/Details';
import Advertisement from '../Components/Advertisement';
import { useState } from 'react';


const Fitness = () => {
  // const [detail] = useContext(store);
  const[data,setData]=useState([]);
  // const url="http://localhost:3002/fitness"
  const url = "https://backend-for-react-blog.onrender.com/fitness";
  useEffect(()=>{

    fetch(url).then(res=>res.json())
    .then(res=>setData(res))
},[])
  console.log(data);
  return (
    <div className='main-container'>

      {data.filter((article) => { return article.category === "Fitness" }).map((n) => (
        <div className='leftBar'>
          <PageStruct
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 300)}

          />
        </div>

      ))

      }

      {data.filter((article) => { return article.category === "Fitness" }).map((n) => (
        <div className='rightBar'>
          <SideBar
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 50)}
          />
        </div>
      ))
      }
      <Advertisement />
    </div>
  )
}

export default Fitness