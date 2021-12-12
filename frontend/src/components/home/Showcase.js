import React from 'react'
import VuilderCard from './VuilderCard'
import { tweets } from '../database/tweets'
// import { vuilders } from '../database/vuilders'
import { promoData } from '../database/promo-data'
import { useEffect, useState } from 'react'
import Tweet from './Tweet'
import axios from 'axios'

const Showcase = () => {
    const [vuilders, setVuilders] = useState([]);

    useEffect(()=>{
        const getVuilders = async () => {
           const res = await axios.get("user/list")
            var vuilders = res.data.filter(obj => obj.isVuilder === true).slice(0,3)
            setVuilders(vuilders)
        }
        getVuilders()
    },[])

    if(vuilders.length > 0){
        return (
            <div id="showcase">
                <section id="promo">
                    <div className="promo-showcase">
                        <div className="promo-wrap">
                            <div className="title p-title">
                                {promoData[0]['title']}
                            </div>
                            <div className="title">
                                {promoData[0]['description']}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="show-headers">
                    <div className="vs-header">Vuilder's Showcase</div>
                    <div className="vs-header">Top Tweets</div>
                </div>
                <div className="show-content l-border">
                    <div>
                        <div className="vuilders-showcase">
                            {vuilders.map(vuilder => (
                                <div key={vuilder._id}>
                                    <VuilderCard vuilder={vuilder}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="tweet-wrap">
                            {tweets.map(tweet => (
                                <div key={tweet._id} className="tweet">
                                    <Tweet tweet={tweet}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                Loading/....
            </div>
        )
    }
        
}

export default Showcase
