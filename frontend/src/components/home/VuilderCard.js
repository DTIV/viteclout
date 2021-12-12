import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../empty-profile.png'


const VuilderCard = (props) => {
    if(props.vuilder.profilePic){
        return (
            <div className="vuilder-card">
                <Link to={`/vuilder/${props.vuilder._id}`}>
                    <img className="profile-pic" src={props.vuilder.image} alt="" />
                    <div className="vuilder-name">
                        {props.vuilder.twitterId}
                    </div>
                </Link>
            </div>
        )
    }else{
        return (
            <div className="vuilder-card">
                <Link to={`/vuilder/${props.vuilder._id}`}>
                    <img className="profile-pic" alt="" src={profile}/>
                    <div className="vuilder-name">
                        {props.vuilder.twitterId}
                    </div>
                </Link>
            </div>
        )
    }
    
}

export default VuilderCard
