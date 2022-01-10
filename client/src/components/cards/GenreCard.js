import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

function GenreCard(props) {
    const location = useLocation()
    const {type, subType} = location.state
    return (
        <div>
            <h1>{type}</h1>
            <h2>{subType}</h2>
        </div>
    )
}

export default GenreCard