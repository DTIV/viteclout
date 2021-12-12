import React from 'react'
import { useState } from 'react'


const Transact = (props) => {
    const [ order, setOrder ] = useState(0);
    if(props.user === true){
        // IF USER IS A VUILDER DISPLAY MINT
        return (
            <div className="mint-wrap">
                <form id="vuild-mint" action="">
                    <div>
                        <input id="vuild-mint-val" type="text" value={1000} disabled/>
                    </div>
                    <div>
                        <input id="mint-sub" type="submit" value={`Mint`}/>
                    </div>
                </form>
            </div>
        )
    }else{
        // IF USER IS A FAN DISPLAY BUY/SELL
        return(
            <div className="transact-wrap">
                <form id="fan-mint" action="">
                    <div>
                        <input id="fan-mint-val" type="text" onChange={(e) => setOrder(e.target.value)}/>
                    </div>
                    <div className="buy-sell-wrap">
                        <input className="transact-btn buy-btn" type="submit" value="Buy"/>
                        <input className="transact-btn sell-btn" type="submit" value="Sell"/>
                    </div>
                </form>
            </div>
        )
    }
}
        

export default Transact
