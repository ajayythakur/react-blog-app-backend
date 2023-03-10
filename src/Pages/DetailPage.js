import React from 'react'
import { Link } from 'react-router-dom'
import SingleBlogPage from './SingleBlogPage'

const DetailPage = () => {
  return (
    <div>
        <SingleBlogPage/>
        <Link to='/'><button className='backbtn'>Back</button></Link>
    </div>
  )
}

export default DetailPage