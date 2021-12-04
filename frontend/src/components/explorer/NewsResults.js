import React from 'react'
import { news_transactions } from '../database/transac';

const NewsResults = () => {
    return news_transactions.filter((item, index) => index < 6).map((market) => (
        <tr key={market._id} >
            <td className={`td ${market.type === "buy" ? 'buy': 'sell'}`}>{market.type}</td>
            <td>{market._id}</td>
            <td>{market.price}</td>
            <td>{market.quantity}</td>
            <td>{market.address}</td>
        </tr>));
}

export default NewsResults
