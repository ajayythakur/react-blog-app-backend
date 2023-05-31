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

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className='Nav'>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/bollywood" className="nav-link active" aria-current="page">Bollywood</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/technology" className="nav-link active" aria-current="page">Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/hollywood" className="nav-link active" aria-current="page">Hollywood</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/fitness" className="nav-link active" aria-current="page">Fitness</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/food" className="nav-link active" aria-current="page">Food</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bollywood' element={<Bollywood />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/hollywood' element={<Hollywood />} />
                <Route path='/fitness' element={<Fitness />} />
                <Route path='/food' element={<Food />} />
                <Route path='*' element={<DetailPage />} />
            </Routes>
        </div>
    )
}
export default NavBar