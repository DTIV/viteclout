import React from 'react'
import { useState } from 'react';
import ExploreTable from './ExploreTable'

const Search = () => {
    const [selection, setSelection] = useState("Address");
    const [vuilder, setVuilder] = useState("");
    const [result, setResult] = useState(false);
 
    return (
        <div id="search">
            <form action="" id="search-form" onSubmit={e => {
                e.preventDefault()
                console.log(vuilder)
                if(vuilder){
                    setResult(vuilder)
                }
            }}>
                <div className="form-wrapp">
                    <div className="sel-wrap">
                        <select name="search-select" id="explore-select" defaultValue="Address" className="explore-btn" onChange={(e) => setSelection(e.target.value)}>
                            <option value="Address">Address</option>
                            <option value="Name">Name</option>
                        </select>
                        <input type="text" className="explore-btn" id="explore-input" onChange={(e) => setVuilder(e.target.value)} placeholder={`Enter Vuilders ${selection}`}/>
                    </div>
                    <input type="submit" className="explore-btn main-btn" id="explore-sumbit" value="Search"/>
                </div>
            </form>
            <ExploreTable vuilder={result}/>
        </div>
    )
}

export default Search
