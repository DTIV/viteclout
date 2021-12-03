import React from 'react'
import NewsResults from './NewsResults'
const NewsTable = () => {
    return (
        <div className="table-container">
            <div className="results-header">News Flash</div>
            <table id="news-table">
                <tbody>
                    <tr className="etable-header">
                        <th>Type</th>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Address</th>
                    </tr>
                    <NewsResults/>
                </tbody>
            </table>
        </div>   
    )
}

export default NewsTable