import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HomeVerticalTiles = (props) => {
  const { imgUrl, title, description, techId } = props;

  return (
    <Link to='/DetailPage'>
      <NavLink
        state={{
          title: title,
          img: imgUrl,
          description: description,
          id: techId,
        }}
        to={`${techId}`}
      >

        <div className="verticalTiles">
          <div className=''>
            <h4>{title}</h4>
            <img className='tileImg' src={imgUrl} alt='404' /> <br />
            <p> {description}</p>
          </div>
          {/* <div className='tile1'>
            <img className='tileImg' src={props.img2} alt='404'/> <br/>
        <p> {props.text2}</p>
        </div>
        <div className='tile1'>
            <img className='tileImg' src={props.img3} alt='404'/> <br/>
        <p> {props.text3}</p>
        </div> */}

          {/* <div className='tile1'><img className='tileImg' src={props.img} alt='404'/>
         </div>
        <div className='tile1'>3</div> */}
        </div>
      </NavLink>
    </Link>
  )
}

export default HomeVerticalTiles