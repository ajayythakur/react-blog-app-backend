import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const PageStruct = (props) => {
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


                <div>
                    <div className='pageContainer'>
                        <div className='pc1'>
                            <img className='pcImage' src={imgUrl} alt="" />
                            <p className='txxt'>{title}<br />
                                <span>{props.imdb}</span>
                                <p>{description}</p></p>
                        </div>



                    </div>
                    <hr className="pcHR" />
                    {/* </div>
        <div className='pageContainer'>
            <div className='pc1'>
            <img className='pcImage' src={props.img2} alt="404" />
                <p className='txxt'>{props.title2}<br/>
                <span>{props.imdb2}</span>
                <p>{props.about2}</p></p>
            </div>
            </div>
            <hr className="pcHR"/>
        <div className='pageContainer'>
            <div className='pc1'>
            <img className='pcImage' src={props.img3} alt="404" />
                <p className='txxt'>{props.title3}<br/>
                <span>{props.imdb3}</span>
                <p>{props.about3}</p></p>
            </div>
            </div>
            <hr className="pcHR"/>
        <div className='pageContainer'>
            <div className='pc1'>
            <img className='pcImage' src={props.img4} alt="404" />
                <p className='txxt'>{props.title4}<br/>
                <span>{props.imdb4}</span>
                <p>{props.about4}</p></p>
            </div>
            </div>
            {/* <div className='pc1'>2</div>
            <div className='pc1'>3</div>
            <div className='pc1'>4</div> */}



                    {/* <div className='pcRC1'>
                <img className='pRCimg' src={props.img2}/>
                <p className='pRCtext'>{props.title2}<br/>
                <span>{props.imdb2}</span>
                <p>{props.date2}</p></p>
                
            </div>
            <hr className="pcHR"/>

            <div className='pcRC1'>
                <img className='pRCimg' src={props.img3}/>
                <p className='pRCtext'>{props.title3}<br/>
                <span>{props.imdb3}</span>
                <p>{props.date3}</p></p>
                
            </div>
            <hr className="pcHR"/>

            <div className='pcRC1'>
                <img className='pRCimg' src={props.img4}/>
                <p className='pRCtext'>{props.title4}<br/>
                <span>{props.imdb4}</span>
                <p>{props.date4}</p></p> */}


                    {/* <div className='pcRC1'>3</div>
            <div className='pcRC1'>4</div>
            <div className='pcRC1'>5</div> */}


                </div>
            </NavLink>
        </Link>
    )
}

export default PageStruct