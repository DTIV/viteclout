import React from 'react'
import emptyProfile from '../empty-profile.png'

const FilterPic = (props) => {
    if(props.filterpic){
        return (
            <div className="filter-img-wrap">
                <img className="filter-img" src={props.filterpic} alt="" />
            </div>
        )
    }else{
        return(
            <div className="filter-img-wrap">
                <img className="filter-img" src={emptyProfile} alt="" />
            </div>
        )
    }
    
}

export default FilterPic
