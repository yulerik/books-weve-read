import React, {useContext} from 'react'
import {BookContext} from '../bookContext'
import {Link} from 'react-router-dom'

function Books(props) {
    const {publicBooks} = useContext(BookContext)
    // link for each book
    const displayBooks = publicBooks.map(each => 
        <Link 
            state={publicBooks.find(book => book._id === each._id)} 
            to={each._id} 
            key={each._id}
        >
            <h3>{each.title}</h3>
        </Link>
        )

    return (
        <div id='all-books'>
            <h1>All Books</h1>
            {displayBooks}
        </div>
    )   
}

export default Books