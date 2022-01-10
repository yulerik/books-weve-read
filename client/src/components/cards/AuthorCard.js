import React from 'react'
import {useLocation} from 'react-router-dom'

function AuthorCard(props) {
    const location = useLocation()
    console.log(location.state)
    return (
        <h1>{location.state.name}</h1>
    )
}

export default AuthorCard