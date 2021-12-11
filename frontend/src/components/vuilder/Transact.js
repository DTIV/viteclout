import React from 'react'

const Transact = (props) => {

    if(props.user == "vuilder"){
        return (
            <div className="mint-wrap">
                Vuilder View
                <form id="mint" action="">
                    <div>
                        <input id="mint-val" type="text" value="1000" disabled/>
                    </div>
                    <div>
                        <input id="mint-sub" type="submit" value="Mint"/>
                    </div>
                </form>
            </div>
        )
    }else{
        return(
            <div className="transact-wrap">
                Fan View
                <form id="mint" action="">
                    <div>
                        <input id="mint-val" type="text"/>
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
