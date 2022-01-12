import React, { useEffect, useContext } from 'react'
import {useLocation, Link} from 'react-router-dom'
import {BookContext} from '../../bookContext'


function AuthorCard(props) {
    const location = useLocation()
    const {getAuthor, booksByAuthor} = useContext(BookContext)
    console.log(booksByAuthor)
    const displayBooks = booksByAuthor.map(each => 
        <Link to={`${each._id}`}>
            <h5>{each.title}</h5>
        </Link>
    )

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