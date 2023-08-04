import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SingleBlogPage = (props) => {
  const location = useLocation();
  const [data,setData]=useState([]);
  const { title, img, description,category } = location.state;
  const articleCategory=category;

  //fetching data from backend for related post

  useEffect(()=>{
    fetch(`https://backend-for-react-blog.onrender.com/${articleCategory}`)
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(err=>console.log(err));
  },[articleCategory])

  // const index=data.findIndex(object=>{
  //   return object.id===id;
  // });
  // console.log(index);
  // const newData=data.splice(index,1);
  return (
    <div>
    <div className='blogPage'>
      <h1>{title}</h1>
      <img src={img} alt="404" />
      <p>{description}</p>
    </div>
    <div >
    <h3 className='sectionlink'>More from {articleCategory}</h3>
      </div>
    <div className='showdata'>
          {data.map((article) => {
            return (
              <Link to='/DetailPage' state={article}>
                <div className='data_card'>
                  <p className='data_title'>{article.title}</p>
                  <img src={article.img} alt='404' />
                  <p className='data_description'>{article.description} </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  )
}

export default SingleBlogPage