import React, { useEffect, useContext } from 'react'
import {useLocation, Link} from 'react-router-dom'
import {BookContext} from '../../bookContext'

function AuthorCard(props) {
    const location = useLocation()
    const {getAuthor, booksByAuthor} = useContext(BookContext)
    // link for each book
    const displayBooks = booksByAuthor.map(each => 
        <Link 
            state={each} 
            to={`/public-books/books/${each._id}`}
            key={each._id}
        >
            <h5>{each.title}</h5>
        </Link>
    )
    // set state for author
    useEffect(() => {
        getAuthor(location.state._id)
    }, [])

    return (
        <div>
            <h1>{location.state.name}</h1>
            {displayBooks}
        </div>
    )
}

export default AuthorCard