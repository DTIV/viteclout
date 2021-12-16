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
        const res = await axios.get('/logout', { withCredentials: true })
        if(res.data === 'loggedout'){
            window.location.href = "/"
        }
    }
    const PF = "http://localhost:5000/images/"
    if(context){
        return (
            <header>
                <nav>
                    <div className="nav-wrap">
                        <Link to="/" className="logo"><span className="vite-txt">vite</span>Clout</Link>
                        <div className="menu">
                            <Link to="/explore">Explore</Link>
                        </div>
                        <div className="nav-btn-wrap">
                            <a className="nav-btn" onClick={logout}>Logout</a>
                            <Link className="nav-btn vc-nav-btn" to="/auth/viteconnect">ViteConnect</Link>
                            <div className='nav-name'>{context.twitterId}</div>
                            { context.profilePic ? (
                                    <Link to={`/profile/${context._id}`}>
                                        <img className="nav-profile" src={PF + context.profilePic} alt="" />
                                    </Link>
                                ):
                                <Link to={`/profile/${context._id}`} disabled>
                                    <img className="nav-profile" src={profile} alt="" />
                                </Link>
                            }
                            
                        </div>
                    </div>
                </nav>
            </header>
        )
    }else{
        return(
            <header>
                <nav>
                    <div className="nav-wrap">
                        <Link to="/" className="logo"><span className="vite-txt">vite</span>Clout</Link>
                        <div className="menu">
                            <Link to="/explore">Explore</Link>
                        </div>
                        <div className="nav-btn-wrap">
                            <Link className="nav-btn" to="/login">Login</Link>
                            <Link className="nav-btn vc-nav-btn" to="/auth/viteconnect">ViteConnect</Link>
                            <Link to={`/`} disabled>
                                <img className="nav-profile" src={profile} alt="" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
    
}

export default Header
