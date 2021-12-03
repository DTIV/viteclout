import React from 'react'
import VuilderCard from './VuilderCard'
import { tweets } from '../api/tweets'
import { vuilders } from '../api/vuilders'
import Tweet from './Tweet'

const Showcase = () => {

    return (
        <div id="showcase">
            <div className="show-headers">
                <div className="vs-header">Vuilder's Showcase</div>
                <div className="vs-header">Top Tweets</div>
            </div>
            <div className="show-content">
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
}

export default Showcase
