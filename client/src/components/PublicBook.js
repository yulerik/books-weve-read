import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BookContext } from '../bookContext'

function PublicBook(props) {
    const { searchResults, fiction, nonFiction, publicGenres } = useContext(BookContext)
    const [filter, setFilter] = useState([searchResults])

    return (
        <>
            <Link id="home-link" to='./'><h1>Public Book List</h1></Link>
            <ul id='public-links'>
                <li>
                    <Link
                        key='allAuthors'
                        to='authors'
                    >
                        All Authors
                    </Link>
                </li>
                <li>
                    <Link
                        genres={fiction, nonFiction, publicGenres}
                        key='allGenres'
                        to='genres'
                    >
                        All Genres
                    </Link>
                </li>
                <li>
                    <Link
                        key='allBook'
                        to='books'
                    >
                        All Books
                    </Link>
                </li>
            </ul>
            <Outlet filter={filter} />
        </>
    )
}

export default PublicBook