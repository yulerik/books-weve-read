import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

function BookCard(props) {
    const location = useLocation()
    const {title, author, genre} = location.state
    const [authors, setAuthors] = useState([])
    const [genres, setGenres] = useState([])
    // link for each author
    const displayAuthors = authors.map(each => 
        <Link 
            state={each} 
            key={each._id} 
            to={`/public-books/authors/${each._id}`}
        >
            <h3>{each.name}</h3>
        </Link>
    )
    // link for each genre
    const displayGenres = genres.map(each => 
        <Link 
            to={`/public-books/genres/${each._id}`} 
            state={each} 
            key={each._id}
        >
            <h6>{each.type} | {each.subType}</h6>
        </Link>
    )
    // set state for author and genre, get calls for each author/genre
    useEffect(() => {
        author.map(each => {
            axios.get(`/authors/${each}`)
                .then(res => setAuthors(prev => [...prev, res.data]))
                .catch(err => console.log(err))
        })
        genre.map(each => {
            axios.get(`/genres/${each}`)
                .then(res => setGenres(prev => [...prev, res.data]))
                .catch(err => console.log(err))
        })
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <h2>Authors:</h2>
            {displayAuthors}
            <h2>Genres:</h2>
            {displayGenres}
        </div> 
    )
}

export default BookCard