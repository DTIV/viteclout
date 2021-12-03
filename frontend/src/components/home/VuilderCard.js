import React from 'react'
import { Link } from 'react-router-dom'
const VuilderCard = (props) => {

    return (
        <div className="vuilder-card">
            <Link to={`/vuilder/${props.vuilder._id}`}>
                <img className="profile-pic" src={props.vuilder.image} alt="" />
                <div className="vuilder-name">
                    {props.vuilder.name}
                </div>
            </Link>
        </div>
    )
}

export default VuilderCard
