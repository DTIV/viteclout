import React from 'react'
import emptyProfile from '../empty-profile.png'

const ProfilePic = (props) => {
    if(props.profilePic){
        return (
            <div className="profile-card">
                <img className="profile-pic" src={props.profilePic} alt="" />
            </div>
        )
    }else{
        return (
            <div className="profile-card">
                <img className="profile-pic" src={emptyProfile} alt="" />
            </div>
        )
    }
    
}

export default ProfilePic
