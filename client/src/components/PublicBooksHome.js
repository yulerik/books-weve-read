import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {BookContext} from '../bookContext'

import NewAuthor from './NewAuthor'
import NewBook from './NewBook'
import NewGenre from './NewGenre'
import BookSearch from './BookSearch'

function PublicBooksHome(props) {
    const {searchResults} = useContext(BookContext)

    const bookResults = searchResults.map(each => 
        <Link to={each._id} key={each._id}>
            <h1>{each.title}</h1>
        </Link>
        )

    return (
        <div>
            <h1>Public Books Home</h1>
            <NewAuthor key='newAuthor' />
            <NewBook key='newBook' />
            <NewGenre key='newGenre' />
            <BookSearch key='bookSearch' />
            {bookResults}
        </div>
    )
}

export default PublicBooksHome