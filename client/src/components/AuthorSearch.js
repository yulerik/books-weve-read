import React, { useContext } from 'react'
import {BookContext} from '../bookContext'

function AuthorSearch(props) {
    const {authorSearch, authorSearchInputs, authorSearchInput} = useContext(BookContext)
    return (
        <form 
            id='author-search' 
            name='author-search' 
            onSubmit={authorSearch}
        >
            <label>Search for an author</label>
            <input 
                onChange={authorSearchInput} 
                value={authorSearchInputs.name} 
                name='name' 
                type='text'
            ></input>
            <button>Author Search</button>
        </form>
    )
}

export default AuthorSearch