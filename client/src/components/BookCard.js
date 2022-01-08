import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {BookContext} from '../bookContext'

function BookCard(props) {
    const {bookId} = useParams()
    const {publicBooks} = useContext(BookContext)
    const [book, setBook] = useState([])

    useEffect(() => {
        const book = publicBooks.find(book => book._id === bookId)
        setBook(book)
    }, [])

    return (
        <div>
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>

        </div>
    )
}

export default BookCard