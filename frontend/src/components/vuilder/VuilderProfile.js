import React from 'react'
import VuilderTweets from './VuilderTweets'
import BondCurve from './BondCurve';
import Stats from './Stats';
import { FaGithubSquare } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import { vuilders } from '../database/vuilders';
import { createCurve } from '../../functions';

import { useState } from 'react';
import { Link } from 'react-router-dom';
const VuilderProfile = (props) => {
    const location = useLocation();
    const vuilder_ID = location.pathname.replace("/vuilder/", "")
    const vuilder = vuilders.find((v) => v._id === vuilder_ID)

    var reserve = 1000;
    var current_price = 0.003;
    var current_sold = 0
    const minted = "Not Minted Yet"
    var data = []

    
    createCurve(data,current_price,reserve)
    
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
                                    <Link to={`/vuilder/${vuilder_ID}/edit`} className="edit-btn">
                                        <div >
                                            Edit
                                        </div>
                                    </Link>
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
                <div className="top-stats">
                    <div>
                        <div className="m-txt">
                            <strong>Current Price</strong>
                        </div>
                        <div className="s-txt">{current_price}</div>
                    </div>
                    <div>
                        <div className="m-txt">
                            <strong>VFT Sold</strong>
                        </div>
                        <div className="s-txt">{current_sold}</div>
                    </div>
                    <div>
                        <div className="m-txt">
                            <strong>VFT Remaining</strong>
                        </div>
                        <div className="s-txt">{reserve}</div>
                    </div>
                    <div>
                        <div className="m-txt">
                            <strong>Minted</strong>
                        </div>
                        <div className="s-txt">{minted}</div>
                    </div>
                </div>
                <div className="bonding-curve">
                    <BondCurve current_price={current_price} data={data}/>
                </div>
                <div className="stats-tweets">
                    <div id="stats">
                        <Stats />
                    </div>
                    <div id="vuilder-tweets">
                        <VuilderTweets />
                    </div>
                </div>
                
            </section>
            
        </div>
    )
}

export default VuilderProfile
