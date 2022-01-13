import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {BookContext} from '../bookContext'

import NewBook from './NewBook'
import BookSearch from './BookSearch'
import AuthorSearch from './AuthorSearch'
import GenreSearch from './GenreSearch'

function PublicBooksHome(props) {
    const {searchResults, publicBooks} = useContext(BookContext)
    // link for each book from the search
    const bookResults = searchResults.map(each => 
        <Link 
            state={publicBooks.find(book => book._id === each._id)} 
            to={`books/${each._id}`} 
            key={each._id}
        >
            <h1>{each.title}</h1>
        </Link>
    )

    return (
        <div id='public-home'>
            <h1>Public Books Home</h1>
            <p>Search for a book. If you cant find the one, go ahead and add it. Make sure each book as atleast one author. If you do not see the author you want, add the author first, then the book.</p>
            <div id='search-inputs'>
                <BookSearch />
                <AuthorSearch />
                <GenreSearch />
            </div>
            <NewBook />
            <div id='search-results'>
                {bookResults}
            </div>
        </div>
    )
}

export default PublicBooksHome