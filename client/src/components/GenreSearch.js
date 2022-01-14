import React, { useContext } from 'react'
import {BookContext} from '../bookContext'

function GenreSearch(props) {
    const {genreSearch, genreSearchInputs, genreSearchInput} = useContext(BookContext)
    return (
        <form 
            id='genre-search' 
            name='genre-search' 
            onSubmit={genreSearch}
        >
            <label>Search for a genre</label>
            <input 
                onChange={genreSearchInput} 
                value={genreSearchInputs.subType} 
                name='subType' 
                type='text'
            ></input>
            <button>Genre Search</button>
        </form>
    )
}

export default GenreSearch