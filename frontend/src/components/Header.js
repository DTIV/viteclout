import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../components/empty-profile.png'
import axios from 'axios'
import { useContext } from 'react'
import { userContext } from './Context'
// AUTHENTICATION
const fan_id = "1"

const Header = () => {
    const context = useContext(userContext)
    console.log("HEADER CONTEXT",context)

    const logout = async () => {
        const res = await axios.get('/logout')
        if(res.data){
            window.location.href = "/"
        }
    }
    return (
        <header>
            <nav>
                <div className="nav-wrap">
                    <Link to="/" className="logo"><span className="vite-txt">vite</span>Clout</Link>
                    <div className="menu">
                        <Link to="/explore">Explore</Link>
                    </div>
                    <div className="nav-btn-wrap">
                        { context ? (
                            <a className="nav-btn" onClick={logout}>Logout</a>
                            ) :
                            <Link className="nav-btn" to="/login">Login</Link>
                        }
                        <Link className="nav-btn vc-nav-btn" to="/auth/viteconnect">ViteConnect</Link>
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
