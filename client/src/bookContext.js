import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const BookContext = React.createContext()

function BookContextProvider(props) {
    const [publicBooks, setPublicBooks] = useState([])
    const [publicAuthors, setPublicAuthors] = useState([])
    
    function getPublicBooks() {
        axios.get('/books')
            .then(res => setPublicBooks(res.data))
            .catch(err => console.log(err))
    }
    function getPublicAuthors() {
        axios.get('/authors')
            .then(res => setPublicAuthors(res.data))
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getPublicBooks()
        getPublicAuthors()
    }, [])

    return (
        <BookContext.Provider value={{publicBooks, publicAuthors}} >
                {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider}
