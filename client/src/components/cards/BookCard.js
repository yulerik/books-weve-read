import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

function BookCard(props) {
    const location = useLocation()
    const {title} = location.state
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default BookCard