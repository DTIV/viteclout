import React from 'react'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrap">
                    <div className="logo">viteClout</div>
                    <div className="menu">
                        <a href="/explore/">Explore</a>
                    </div>
                    <div className="nav-btn-wrap">
                        <a className="nav-btn" href="#">Login</a>
                        <a className="nav-btn" href="#">ViteConnect</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
