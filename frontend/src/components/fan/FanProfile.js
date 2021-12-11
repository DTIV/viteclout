import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import { fans } from '../database/fans';
import { createCurve } from '../../functions';
import { Link } from 'react-router-dom';
import Stats from '../vuilder/Stats';
import VuilderTweets from '../vuilder/VuilderTweets';
import FanTransac from './FanTransac';

const FanProfile = () => {
    const location = useLocation();
    const fan_ID = location.pathname.replace("/profile/", "")
    const fan = fans.find((v) => v._id === fan_ID)
    return (
        <div id="profile" className="l-border">
            <div className="profile-wrap">
                <div className="main-profile">
                    <div className="profile-card">
                        <img className="profile-pic" src={fan.image} alt="" />
                    </div>
                </div>
                <div className="profile-blog">
                    <div>
                        <div className="blog-wrap">
                            <div className="blog-top">
                                <div className="l-txt">{fan.name}</div>
                                <div className="edit-wrap">
                                    <Link to={`/profile/${fan_ID}/edit`} className="edit-btn">
                                        <div >
                                            Edit
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="blog-head">{fan.header}</div>
                        <div className="blog-body">{fan.blog}</div>
                        <div className="line"></div>
                        <div id="vuilder-socials">
                            <div className="git-tab"><a href="http://www.github.com" target="__blank"><FaGithubSquare /></a></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <section className="profile-bottom">
                    <div className="top-stats">
                        <div>
                            <div className="m-txt">
                                <strong>VFT Balance</strong>
                            </div>
                            <div className="s-txt">10</div>
                        </div>
                        <div>
                            <div className="m-txt">
                                <strong>VITE Balance</strong>
                            </div>
                            <div className="s-txt">500</div>
                        </div>
                    </div>
                    <div className="stats-tweets">
                        <div id="stats">
                            <FanTransac />
                        </div>
                        <div id="vuilder-tweets">
                            <VuilderTweets />
                        </div>
                    </div>
                    
                </section>
        </div>
    )
}

export default FanProfile
