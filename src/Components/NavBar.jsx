import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Hollywood from '../Pages/Hollywood'
import Food from '../Pages/Food'
import Fitness from '../Pages/Fitness'
import Home from '../Pages/Home'
import DetailPage from '../Pages/DetailPage'
// import SingleBlogPage from '../Pages/SingleBlogPage'

const NavBar = () => {
    return (
        <div>

            <p id='headText'><span id='verticalText'>The</span><span id='siren'>SIREN</span></p>
            <div id='NavBar'>
                <div><NavLink to="/">Home</NavLink></div>
                <div><NavLink to="/bollywood">Bollywood</NavLink></div>
                <div><NavLink to="/technology">Technology</NavLink></div>
                <div><NavLink to="/hollywood">Hollywood</NavLink></div>
                <div><NavLink to="/fitness">Fitness</NavLink></div>
                <div><NavLink to='/Food'>Food</NavLink></div>
            </div>
            <hr className='hr' />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bollywood' element={<Bollywood />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/hollywood' element={<Hollywood />} />
                <Route path='/fitness' element={<Fitness />} />
                <Route path='/food' element={<Food />} />
                {/* <Route path=':category/articleid' element={<SingleBlogPage />} /> */}
                <Route path='*' element={<DetailPage />} />
            </Routes>
        </div>
    )
}

export default NavBar