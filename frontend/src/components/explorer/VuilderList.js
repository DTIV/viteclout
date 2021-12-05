import React from 'react'
import { useState } from 'react'
import { vuilders } from '../database/vuilders'
import { Link } from 'react-router-dom'

const VuilderList = () => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1*(10**1000))
    const [isMinted, setIsMinted] = useState("all")
    return (
        <div id="vuilder-list">
            <div className="l-txt results-header">
                ALL VUILDERS
            </div>
            <div className="vuilder-filter">
                <div className="line"></div>
                <form action="" className="filter-form">
                    <div className="price-sec">
                        <input className="filter-input" type="" placeholder="Min Price" onChange={(e) => (setMinPrice(e.target.value))} />
                        <input type="" className="filter-input" placeholder="Max Price" onChange={(e) => (setMaxPrice(e.target.value))}/>
                    </div>
                    <div>
                        <select name="" className="mint-filter filter-input" id="" defaultValue="all" placeholder="Minted" onChange={(e) => (setIsMinted(e.target.value))}>
                            <option value="all">All</option>
                            <option value={true}>Minted</option>
                            <option value={false}>Not Minted</option>
                        </select>
                    </div>
                </form>
                <div className="line"></div>
            </div>
            
            <div>
                
                <div className="vft-section">
                    {vuilders.filter((vuilder) => (vuilder.current_price > minPrice)
                        && (vuilder.current_price < maxPrice)
                        && ( isMinted == "all" | (isMinted == vuilder.minted))).map(vuilder => (
                        <div key={vuilder._id}>
                            {/* <div className="vuilder-box">
                                <div>{vuilder.name}</div>
                                <img className="filter-img" src={vuilder.image} alt="" /> 
                            </div> */}
                            <div className="vuilder-box">
                                <Link to={`/vuilder/${vuilder._id}`} className="vuilder-link">
                                    <div className="inner-wrap">
                                        <div className="filter-img-wrap">
                                            <img className="filter-img" src={vuilder.image} alt="" />
                                        </div>
                                        <div className="box-header">
                                            <div className="name-price">
                                                <div className="m-txt"><strong>{vuilder.name}</strong></div>
                                                <div className="box-price">{vuilder.current_price} <small>VITE</small></div>
                                            </div>
                                            <div className="line-light"></div>
                                            <div className="box-stats">
                                                <div>VLT Sold:</div>
                                                <div>{vuilder.sold}</div>
                                                <div>VLT Remaining:</div> 
                                                <div>{vuilder.vft_reserve}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default VuilderList
