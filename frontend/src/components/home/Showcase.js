import React from 'react'
import VuilderCard from './VuilderCard'
import { tweets } from '../database/tweets'
// import { vuilders } from '../database/vuilders'
import { promoData } from '../database/promo-data'
import { useEffect, useState } from 'react'
import Tweet from './Tweet'
import axios from 'axios'

require('dotenv').config()

console.log(process.env.REACT_APP_KEY)
var Twit = require('twit')
var T = new Twit({
    consumer_key: '2PFpsPzlSfDFxKTjFgXkjhfLC', //process.env.REACT_APP_KEY,
    consumer_secret: '8VEzAWHzbSMMc4u8B2BkJ5R9syocFQEfuwnQzhjLYxYAf3lkxK',//process.env.REACT_APP_SECRET,
    access_token: '1323472757988970502-csux73LVh73WIjOcQSLWs5CQF7UDQ5',//process.env.REACT_APP_ACCESS_TOKEN,
    access_token_secret:  'BFN1h1B9vvniWlTMtjRNwgpHfUnveMtpEBZFOlmUEjbxu',//process.env.REACT_APP_ACCESS_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100}, function(err, data, response) {
    console.log(data)
})

const Showcase = () => {
    const [vuilders, setVuilders] = useState([]);

    useEffect(()=>{
        const getVuilders = async () => {
            try{
                const res = await axios.get("user/list")
                var vuilders = res.data.filter(obj => obj.isVuilder === true).slice(0,3)
                setVuilders(vuilders)
            }catch(err){
                console.log(err)
            }
           
            
        }
        getVuilders()
    },[])
    const PF = "http://localhost:5000/images/"
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
