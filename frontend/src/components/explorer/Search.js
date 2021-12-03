import React from 'react'
import { useState } from 'react';

const Search = () => {
    const [selection, setSelection] = useState("Address");

    return (
        <div id="search">
            <div className="form-wrapp">
                <div className="sel-wrap">
                    <select name="search-select" id="explore-select" defaultValue="Address" className="explore-btn" onChange={(e) => setSelection(e.target.value)}>
                        <option value="Address">Address</option>
                        <option value="Name">Name</option>
                    </select>
                    <input type="text" className="explore-btn" id="explore-input" placeholder={`Enter Vuilders ${selection}`}/>
                </div>
                <input type="submit" className="explore-btn main-btn" id="explore-sumbit" value="Search"/>
            </div>
        </div>
    )
}

export default Search
