import React, { useEffect } from 'react'
import PageStruct from '../Components/PageStruct'
import SideBar from '../Components/SideBar';
// import { useContext } from 'react';
// import { store } from '../Components/Details';
import Advertisement from '../Components/Advertisement';
import { useState } from 'react';

const Hollywood = () => {
  // const [detail] = useContext(store);
  const[data,setData]=useState([]);
  // const url="http://localhost:3002/hollywood";

  const url = "https://backend-for-react-blog.onrender.com/hollywood";
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>setData(res))
  },[])
  console.log(data);
  return (
    <div className='main-container'>
      <Advertisement />
      {data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
        <div className='leftBar'>
          <PageStruct
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 300)}

          />
        </div>

      ))

      }

      {data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
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
          img="https://www.pinkvilla.com/english/images/2023/01/582836848_where-to-watch-everything-everywhere-all-at-once-the-film-that-topped-oscar-nominations-with-11-nods_1280*720.jpg"
          title="Everything Everywhere All At Once"
          imdb=""
          about="Where to watch Everything Everywhere All At Once, the film that topped Oscar nominations with 11 nods.
          Michelle Yeoh starrer Everything Everywhere All At Once led the Oscar 2023 nominations by scoring 11 nods this year. Here’s where you can watch the movie!"

          img2="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/f9-poster-social-feature.jpg?q=50&fit=contain&w=767&h=&dpr=1.5"
          title2="FAST 10"
          imdb2=""
          about2="You know what they say: good things come in 10s. Fine, maybe they don't actually say that, but in the case of the latest high-octane installment in the Fast and the Furious saga, Fast X, it certainly holds true.You know what they say: good things come in 10s. Fine, maybe they don't actually say that."

          img3="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_pur_digital_01.png"
          title3="WAKANDA FOREVER"
          imdb3=""
          about3="Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death."
      /> */}
    </div>
  )
}

export default Hollywood