import React from 'react'
import TradeResults from './TradeResults'

const ExploreTable = (props) => {
    var results = props.vuilder
    return (
        <div className={`${results ? 'table-container active' : 'hide'}`}>
            <div className="results-header">Results for: {results}</div>
            <table id="explore-table">
                <tbody>
                    <tr className="etable-header">
                        <th>Type</th>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Circulating</th>
                        <th>VFT Reserve</th>
                        <th>Vite Reserve</th>
                    </tr>
                    <TradeResults/>
                </tbody>
            </table>
        </div>   
    )
}

export default ExploreTable
