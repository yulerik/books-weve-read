import React, { useContext } from 'react'
import {BookContext} from '../bookContext'

function BookSearch(props) {
    const {bookSearch, searchInputs, searchInput} = useContext(BookContext)
    return (
        <form 
            id='book-search' 
            name='book-search' 
            onSubmit={bookSearch}
        >
            <label>Search for a book</label>
            <input 
                onChange={searchInput} 
                value={searchInputs.name} 
                name='title' 
                type='text'
            ></input>
            <button>Search</button>
        </form>
    )
}

export default BookSearch