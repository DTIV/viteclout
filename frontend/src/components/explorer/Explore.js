import React from 'react'
import Search from './Search'

import NewsTable from './NewsTable'

const Explore = () => {
    return (
        <div id="explore" className="l-border">
            <Search />
            <NewsTable />
        </div>
    )
}

export default Explore
