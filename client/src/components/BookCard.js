import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BookContext} from '../bookContext'

function BookCard(props) {
    const {bookId} = useParams()
    const {publicBooks, findBook} = useContext(BookContext)
    const [book] = useState(findBook(bookId, publicBooks))

    // useEffect(() => {
    //     setBook(findBook(bookId, publicBooks))
    // }, [book])

    return (
        <div>
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
            
        </div>
    )
}

export default BookCard