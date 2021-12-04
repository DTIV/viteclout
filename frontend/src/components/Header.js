import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../components/empty-profile.png'
const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrap">
                    <Link to="/" className="logo"><span className="vite-txt">vite</span>Clout</Link>
                    <div className="menu">
                        <Link to="/explore">Explore</Link>
                    </div>
                    <div className="nav-btn-wrap">
                        <a className="nav-btn" href="#">Login</a>
                        <a className="nav-btn vc-nav-btn" href="#">ViteConnect</a>
                        <a href="#">
                            <img className="nav-profile" src={profile} alt="" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
