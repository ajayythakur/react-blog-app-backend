import React from 'react'
import { Link } from 'react-router-dom';
// import Advertisement from './Advertisement';

const SideBar = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <Link state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`${articleid}`}>

      <div>

        <div className='pcRightContainer'>
          {/* <div><h2>Top Post</h2></div>
    <div className='pcRC1 adv'>Advertisment</div>
    <hr className="pcHR"/> */}

          {/* <Advertisement/> */}
          <div className='pcRC1 '>
            <img className='pRCimg' src={imgUrl} alt='404' />
            <p className='pRCtext'>{title}<br />
              <span>{description}</span>
              <p>{props.date}</p></p>

          </div>

        </div>

      </div>
    </Link>
  )
}

export default SideBar