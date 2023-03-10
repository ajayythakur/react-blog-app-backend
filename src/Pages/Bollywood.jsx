import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import PageStruct from '../Components/PageStruct'
// import { store } from '../Components/Details'
import SideBar from '../Components/SideBar';
// import Advertisement from '../Components/Advertisement';
// import SideBar from '../Components/SideBar';


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
        <div className='main-container'>
            {/* <Advertisement /> */}

            {data.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                <div className='leftBar'>
                    <PageStruct
                        imgUrl={n.img}
                        title={n.title}
                        description={n.description.slice(0, 300)}

                    />
                </div>

            ))

            }

            {data.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                <div className='rightBar'>
                    <SideBar
                        imgUrl={n.img}
                        title={n.title}
                        description={n.description.slice(0, 50)}
                    />
                </div>
            ))
            }
        </div>
    )
}

export default Bollywood