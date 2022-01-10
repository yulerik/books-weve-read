import React, { useContext, useEffect, useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {BookContext} from '../bookContext'

import NewAuthor from './NewAuthor'
import NewBook from './NewBook'
import NewGenre from './NewGenre'


function PublicBook(props) {
    const {publicBooks, fiction, nonFiction, publicGenres} = useContext(BookContext)
    const [filter, setFilter] = useState([])

    
    return (
        <>
            <h1>Public Book List</h1>
            <nav>
                <ul>
                    <li><Link key='allAuthors' to='authors'>All Authors</Link></li>
                    <li><Link genres={fiction, nonFiction, publicGenres} key='allGenres' to='genres'>All Genres</Link></li>
                    <li><Link key='allBook' to='books'>All Books</Link></li>
                </ul>
            </nav>
            <NewAuthor key='newAuthor' />
            <NewBook key='newBook' />
            <NewGenre key='newGenre' />
            <Outlet />
        </>
    )
}

export default PublicBook