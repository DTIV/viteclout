import React from 'react'
import { useLocation } from 'react-router-dom'
import { vuilders } from '../database/vuilders';
import { Link } from 'react-router-dom';
import { FaGithubSquare } from 'react-icons/fa';
import BondCurve from './BondCurve';
import VuilderTweets from './VuilderTweets'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip} from 'recharts';
import { useState } from 'react';

const VuilderProfile = (props) => {
    const location = useLocation();
    const [width, setWidth] = useState(1700);
    const vuilder_ID = location.pathname.replace("/vuilder/", "")
    const vuilder = vuilders.find((v) => v._id === vuilder_ID)
    // const data = [
    //     {name: 'Page A', uv: 400},
    //     {name: 'Page B', uv: 300},
    //     {name: 'Page C', uv: 200},
    //     {name: 'Page D', uv: 100},
    // ];


    const mint_amount = 1000
    var data = []
    function createCurve(){

        for(var i=0; i <= 1000; i++){
            var price = 0.003 * (i * 10 ** 2)
            var point = {name: i, price: price}
            data.push(point)
        }
    }
    createCurve()
    window.addEventListener("resize", function(event) {
        var curve_wrap = this.document.getElementsByClassName("bonding-curve")
        setWidth(curve_wrap[0].clientWidth) 
        // console.log(curve_wrap.clientHeight, curve_wrap.clientWidth)
        // console.log(document.getElementsByClassName("bonding-curve").clientWidth + ' wide by ' + document.body.clientHeight+' high');
    })
    
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
                    <LineChart 
                        className = "line-chart"
                        width={width} 
                        height={420} 
                        data={data} 
                        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name">
                            <Label className="chart-labal" value="VLT Sold" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'price(VITE)', angle: -90, position: 'insideLeft' }}/>
                        <Tooltip />
                    </LineChart>
                </div>
                
            </section>
            <div className="vuilder-tweets">
                    <VuilderTweets />
                </div>
        </div>
    )
}

export default VuilderProfile
