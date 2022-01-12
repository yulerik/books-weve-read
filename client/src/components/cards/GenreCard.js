import React, { useEffect, useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {BookContext} from '../../bookContext'

function GenreCard(props) {
    const {getGenre, booksByGenre} = useContext(BookContext)
    const location = useLocation()
    const {type, subType, _id} = location.state

    const displayBooks = booksByGenre.map(each => 
        <Link to={`${each._id}`}>
            <h2>{each.title}</h2>
        </Link>
        )

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