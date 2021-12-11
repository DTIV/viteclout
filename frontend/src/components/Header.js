import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../components/empty-profile.png'

// AUTHENTICATION
const fan_id = "1"

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
                        <Link className="nav-btn" to="/login">Login</Link>
                        <a className="nav-btn vc-nav-btn" href="#">ViteConnect</a>
                        <Link to={`/profile/${fan_id}`}>
                            <img className="nav-profile" src={profile} alt="" />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
