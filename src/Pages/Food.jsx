import React, { useEffect, useState } from 'react'
import PageStruct from '../Components/PageStruct'
import SideBar from '../Components/SideBar';
// import { useContext } from 'react';
// import { store } from '../Components/Details';
import Advertisement from '../Components/Advertisement';

const Food = () => {
  // const [detail] = useContext(store);
  const[data,setData]=useState([]);
  // const url="http://localhost:3002/food";
  const url = "https://backend-for-react-blog.onrender.com/food";
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>setData(res));
  })
  console.log(data);
  return (
    <div className='main-container'>

      {data.filter((article) => { return article.category === "Food" }).map((n) => (
        <div className='leftBar'>
          <PageStruct
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 1000)}

          />
        </div>

      ))

      }

      {data.filter((article) => { return article.category === "Food" }).map((n) => (
        <div className='rightBar'>
          <SideBar
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 1000)}
          />
        </div>
      ))
      }

      {/* <PageStruct 
       img="https://joybauer.com/wp-content/uploads/2016/02/thumb_2041_content_big_wide.jpg"
       title="Tea and Coffee"
       about="Tea and coffee may wake you up and keep you focused, but don’t overdo it on the caffeine — it may trigger migraines or IBS in people who are sensitive."


       img2="https://joybauer.com/wp-content/uploads/2016/02/thumb_2023_content_big_wide.jpg"
       title2="Cruciferous Vegetables"
       about2="Cruciferous vegetables like broccoli and brussels sprouts are filling and full of nutrients that help keep you healthy! But if you have IBS, you may want to watch how much of them you eat!"  

       img3="https://joybauer.com/wp-content/uploads/2016/02/thumb_2035_content_big_wide.jpg"
       title3="Reduce Weight"
about3="Eggs, chicken, and turkey are rich in high-quality, lean protein and a variety of nutrients. Just remember to remove the skin and reduce the number of egg yolks to keep your heart and waistline in good shape!"
      /> */}
      <Advertisement />
    </div>
  )
}

export default Food