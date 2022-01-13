import React, { useEffect, useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {BookContext} from '../../bookContext'

function GenreCard(props) {
    const {getGenre, booksByGenre} = useContext(BookContext)
    const location = useLocation()
    const {type, subType, _id} = location.state
    // link for each book
    const displayBooks = booksByGenre.map(each => 
        <Link 
            state={each}  
            to={`/public-books/books/${each._id}`}
            key={each._id}    
        >
            <h2>{each.title}</h2>
        </Link>
        )
    // set genre state, get call to for genre info
    useEffect(() => {
        getGenre(_id)
    }, [])

    return (
        <div>
            <h1>{type}</h1>
            <h2>{subType}</h2>
            <h3>All Books</h3>
            {displayBooks}
        </div>
    )
}

export default GenreCard