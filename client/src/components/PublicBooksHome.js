import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BookContext} from '../bookContext'

import NewBook from './NewBook'
import BookSearch from './BookSearch'
import AuthorSearch from './AuthorSearch'
import GenreSearch from './GenreSearch'
import { set } from 'mongoose'

function PublicBooksHome(props) {
    const {
        setSearchResults,
        setAuthorSearchResults,
        setGenreSearchResults,
        searchResults, 
        publicBooks, 
        authorSearchResults, 
        genreSearchResults
    } = useContext(BookContext)
    // link for each book from the search
    const bookResults = searchResults.map(each => 
        <Link 
            state={publicBooks.find(book => book._id === each._id)} 
            to={`books/${each._id}`} 
            key={each._id}
        >
            <li>{each.title}</li>
        </Link>
    )
    const authorResults = authorSearchResults.map(each => 
        <Link
            state={each}
            to={`authors/${each._id}`}
            key={each._id}
        >
            <li>{each.name}</li>
        </Link>
        )
    const genreResults = genreSearchResults.map(each => 
        <Link
            state={each}
            to={`genres/${each._id}`}
            key={each._id}
        >
            <li>{each.subType} | {each.type}</li>
        </Link>
        )

    useEffect(() => {
        setSearchResults([])
        setAuthorSearchResults([])
        setGenreSearchResults([])
    }, [])

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
                <ul 
                    style={{display: searchResults.length === 0 && 'none'}} 
                    id='book-results'
                >
                    <h3>Book Search Results</h3>
                    {bookResults}
                </ul>
                <ul 
                    style={{display: authorSearchResults.length === 0 && 'none'}}
                    id='author-results'
                >
                    <h3>Author Search Results</h3>
                    {authorResults}
                </ul>
                <ul 
                    style={{display: genreSearchResults.length === 0 && 'none'}}
                    id='genre-results'
                >   
                    <h3>Genre Search Results</h3>
                    {genreResults}
                </ul>
            </div>
        </div>
    )
}

export default PublicBooksHome