import React, { useContext } from 'react'
import {BookContext} from '../bookContext'

function BookSearch(props) {
    const {bookSearch, searchInputs, searchInput} = useContext(BookContext)
    return (
        <form name='book-search' onSubmit={bookSearch}>
            <label>Search for a book</label>
            <input onChange={searchInput} value={searchInputs.title} name='title' type='text'></input>
            <button>Search</button>
        </form>
    )
}

export default BookSearch