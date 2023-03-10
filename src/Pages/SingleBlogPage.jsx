import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleBlogPage = (props) => {
  const location = useLocation();
  const { title, img, description } = location.state;
  console.log(title)


  return (
    <div className='blogPage'>
      <h1>{title}</h1>
      <img src={img} alt="404" />
      <p>{description}</p>
    </div>
  )
}

export default SingleBlogPage