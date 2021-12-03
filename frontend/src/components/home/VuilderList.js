import React from 'react'
import { vuilders } from '../api/vuilders'
import VuilderCard from './VuilderCard'

const VuilderList = () => {
    return vuilders.map(vuilder => (
        <VuilderCard hello={"hello"}/>    
    ))
}

export default VuilderList
