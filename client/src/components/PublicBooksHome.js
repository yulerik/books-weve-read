import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {BookContext} from '../bookContext'


import NewBook from './NewBook'
import BookSearch from './BookSearch'

function PublicBooksHome(props) {
    const {searchResults, publicBooks, publicAuthors, publicGenres} = useContext(BookContext)

    const bookResults = searchResults.map(each => 
        <Link state={publicBooks.find(book => book._id === each._id)} to={`books/${each._id}`} key={each._id}>
            <h1>{each.title}</h1>
        </Link>
        )

    return (
        <div>
            <h1>Public Books Home</h1>
            <p>Search for a book. If you dont find one add</p>
            <BookSearch key='bookSearch' />
            {/* <NewAuthor authors={publicAuthors} key='newAuthor' /> */}
            {/* <NewGenre key='newGenre' /> */}
            <NewBook key='newBook' />
            {bookResults}
        </div>
    )
}

export default PublicBooksHome