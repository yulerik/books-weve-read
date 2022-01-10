import React, {useEffect, useState} from 'react'
import axios from 'axios'

const BookContext = React.createContext()

function BookContextProvider(props) {
    const [publicBooks, setPublicBooks] = useState([])
    const [publicAuthors, setPublicAuthors] = useState([])
    const [publicGenres, setPublicGenres] = useState([])
    const [fiction, setFiction] = useState([])
    const [nonFiction, setNonFiction] = useState([])
    
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
    function filterFictions(genres) {
        const fiction = genres.filter(each => each.type === 'fiction')
        const nonFiction = genres.filter(each => each.type === 'non-fiction')
        setFiction(fiction)
        setNonFiction(nonFiction)
    }
    function getPublicGenres() {
        axios.get('/genres')
            .then(res => {
                setPublicGenres(res.data)
                filterFictions(res.data)
            })
            .catch(err => console.log(err))
        
    }
    function findBook(bookId, books) {
        const book = books.find(book => book._id === bookId)
        return book
    }
    
    
    useEffect(() => {
        getPublicBooks()
        getPublicAuthors()
        getPublicGenres()
    }, [])

    return (
        <BookContext.Provider value={{
            fiction, 
            nonFiction, 
            publicGenres, 
            publicBooks, 
            publicAuthors, 
            findBook
            }} >
                {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider}
