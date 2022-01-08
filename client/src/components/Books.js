import React, { useParams, useContext } from 'react'
import {BookContext} from '../bookContext'

function Books(props) {
    const {bookId} = useParams()
    const {publicBooks} = useContext(BookContext)
    
    return (
        <h1>Books</h1>
    )
}

export default Books