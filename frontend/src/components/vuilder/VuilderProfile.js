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
    const [width, setWidth] = useState(document.body.clientWidth - 80);
    const vuilder_ID = location.pathname.replace("/vuilder/", "")
    const vuilder = vuilders.find((v) => v._id === vuilder_ID)

    var reserve = 1000;
    var current_price = 0.003;

    var data = []

    function createCurve(){
        for(var i=0; i <= reserve; i++){
            if(i === 0){
                var price = current_price
            }else{
                var price = current_price * (i * 10 ** 2)
            }
            var point = {name: i, price: price}
            data.push(point)
        }
    }
    console.log(data)
    createCurve()
    window.addEventListener("resize", function(event) {
        var curve_wrap = this.document.getElementsByClassName("bonding-curve")
        setWidth(curve_wrap[0].clientWidth) 
        // console.log(curve_wrap.clientHeight, curve_wrap.clientWidth)
        // console.log(document.getElementsByClassName("bonding-curve").clientWidth + ' wide by ' + document.body.clientHeight+' high');
    })
    
    const CustomizedDot = (props) => {
        const { cx, cy, stroke, payload, value } = props;
        // console.log(value)
        if (value === current_price) {
          return (
            <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="skyblue" viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
          );
        }
      
        return (false);
      };


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
                    <LineChart 
                        className = "line-chart"
                        width={width} 
                        height={420} 
                        data={data}
                        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={<CustomizedDot />}/>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name">
                            <Label className="chart-labal" value="VLT Sold" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'price (VITE)', angle: -90, position: 'insideLeft' }}/>
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
