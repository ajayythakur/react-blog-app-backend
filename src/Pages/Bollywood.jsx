import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Bollywood = () => {
    // const [detail] = useContext(store);
    const[data,setData]=useState([]);
    useEffect(()=>{
        // const url="http://localhost:3002/bollywood"
        const  url = "https://backend-for-react-blog.onrender.com/bollywood";
        fetch(url).then(res=>res.json())
        .then(res=>setData(res))
    },[])
    // console.log(data);
    return (
        <div className='main-page'>
        <div className='first-child'>
                    {data.filter((article) => { return article.category === "Bollywood" }).map((n) => (
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
                        <div className='add'>Advertisement</div>
                        <div className='topPos' >Top Posts</div>
                        {data.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                        <Link to='/DetailPage' state={n}>
                        <div className='post'>
                            <div><img src={n.img} alt='404'/></div>
                            <div className='cont'>
                            <p className='data_title postTitle'>{n.title} </p>
                            <p className='data_description'>{n.description} </p>
                            </div>
                            
        
                        </div>
                        </Link>
                        
                    ))
                    }
                    </div>
                    {/* </div> */}
                </div>
    )
}

export default Bollywood