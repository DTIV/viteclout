import React from 'react'
import { useLocation } from 'react-router-dom'
import { vuilders } from '../database/vuilders';
import { Link } from 'react-router-dom';
import { FaGithubSquare } from 'react-icons/fa';
import BondCurve from './BondCurve';
import VuilderTweets from './VuilderTweets'


const VuilderProfile = (props) => {
    const location = useLocation();
    const vuilder_ID = location.pathname.replace("/vuilder/", "")
    const vuilder = vuilders.find((v) => v._id === vuilder_ID)
    return (
        <div id="profile" className="l-border">
            <div className="profile-wrap">
                <div className="main-profile">
                    <div className="profile-card">
                        <img className="profile-pic" src={vuilder.image} alt="" />
                    </div>
                    <div className="mint-wrap">
                        <form id="mint" action="">
                            <div>
                                <input id="mint-val" type="text" value="1000" disabled/>
                            </div>
                            <div>
                                <input id="mint-sub" type="submit" value="Mint"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="profile-blog">
                    <div>
                        <div className="blog-wrap">
                            <div className="blog-top">
                                <div className="l-txt">{vuilder.name}</div>
                                <div className="edit-wrap">
                                    <a href="" className="edit-btn">
                                        <div >
                                            Edit
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="blog-head">{vuilder.header}</div>
                        <div className="blog-body">{vuilder.blog}</div>
                        <div className="line"></div>
                        <div id="vuilder-socials">
                            <div className="git-tab"><a href="http://www.github.com" target="__blank"><FaGithubSquare /></a></div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <section className="profile-bottom">
                <div className="bonding-curve">
                    <BondCurve />
                </div>
                <div className="vuilder-tweets">
                    <VuilderTweets />
                </div>
            </section>
        </div>
    )
}

export default VuilderProfile
