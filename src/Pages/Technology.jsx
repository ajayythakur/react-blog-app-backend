import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import adv from "../Images/adv.jpg"


const Technology = () => {
  // const [detail] = useContext(store);
  const [data, setData] = useState([]);
  // const url="http://localhost:3002/technology";
  const url = "https://backend-for-react-blog.onrender.com/technology";
  fetch(url)
    .then(res => res.json())
    .then(res => setData(res));

  console.log(data);
  return (
    <div className='main-page'>
      <div className='first-child'>
        {data.filter((article) => { return article.category === "Technology" }).map((n) => (
          // <div className='side-inline'>
          <Link to='/DetailPage' state={n}>
            <div className='content'>
              <div><img src={n.img} alt='404'></img></div>
              <div className='cont'>
                <p className='data_title res-title'>{n.title} </p>
                <p className='data_description'>{n.description} </p>
              </div>
            </div>
          </Link>
        ))
        }
      </div>
      {/* <div className='side-inline'> */}
      <div className='adv_top'>
      <div className='add'>
                        <img src={adv} alt="advertisement" />
                        </div>
        <div className='topPos' >Top Posts</div>
        {data.filter((article) => { return article.category === "Technology" }).map((n) => (
          <Link to='/DetailPage' state={n}>
            <div className='post'>
              <div><img src={n.img} alt='404' /></div>
              <div className='cont'>
                <p className='data_title postTitle'>{n.title} </p>
                <p className='data_description'>{n.description} </p>
              </div>
            </div>
          </Link>

        ))
        }
      </div>
    </div>
  )
}

export default Technology