import React, {useEffect, useState} from 'react'
import axios from 'axios'


const BookContext = React.createContext()

function BookContextProvider(props) {
    const [publicBooks, setPublicBooks] = useState([])
    const [publicAuthors, setPublicAuthors] = useState([])
    const [publicGenres, setPublicGenres] = useState([])
    const [fiction, setFiction] = useState([])
    const [nonFiction, setNonFiction] = useState([])
    const [searchInputs, setSearchInputs] = useState({title: ''})
    const [searchResults, setSearchResults] = useState([])
    const [newBookForm, setNewBookForm] = useState({title: ''})
    const [newAuthorInputId, setNewAuthorInputId] = useState({_id: ''})
    const [secAuthorId, setSecAuthorId] = useState([])
    const [booksByAuthor, setBooksByAuthor] = useState([])
    const [booksByGenre, setBooksByGenre] = useState([])

    function getGenre(id) {
        axios.get(`/public-books/genres/${id}/books`)
            .then(res => setBooksByGenre(res.data))
            .catch(err => console.log(err))
    }

    function getAuthor(id) {
        axios.get(`/public-books/authors/${id}/books`)
            .then(res => setBooksByAuthor(res.data))
            .catch(err => console.log(err))
    }

    
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
    function bookSearch(event) {
        event.preventDefault()
        if (event.target.title.value === '') {
            return
        } else {
            axios.get(`/search/books?title=${event.target.title.value}`)
                .then(res => {
                    setSearchResults(res.data)
                    setSearchInputs({title: ''})
                })
                .catch(err => console.log(err))
        }
    }
    function searchInput(event) {
        const {name, value} = event.target
        setSearchInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function findGenre(id) {
        const genre = publicGenres.find(each => each._id === id)
        return genre
    }
    function newBookSubmit(event) {
        event.preventDefault()
        console.log(event)
        const newBook = {}
        newBook.title = newBookForm.title
        newBook.author = newAuthorInputId._id
        if (secAuthorId.length > 0) {
            newBook.author = [newAuthorInputId._id, ...secAuthorId]
        }
        console.log(newBook)
    }
    function handleNewBookForm(event) {
        const {name, value} = event.target
        setNewBookForm(prevInputs => ({...prevInputs, [name]: value}))
    }
    function newAuthorInput(event){
        console.log(event.target.value)
        setNewAuthorInputId(prevInputs => ({_id: event.target.value}))
    }
    function moreAuthors(event) {
        const checked = event.map(each => each.checked && each.name==='author')
        console.log(checked)
    }
    

    
    
    useEffect(() => {
        getPublicBooks()
        getPublicAuthors()
        getPublicGenres()
    }, [])

    return (
        <BookContext.Provider value={{
            searchInputs,
            searchResults,
            fiction, 
            nonFiction, 
            publicGenres, 
            publicBooks, 
            publicAuthors, 
            newBookForm,
            booksByAuthor,
            booksByGenre,
            getGenre,
            findBook,
            bookSearch,
            searchInput,
            newBookSubmit,
            handleNewBookForm,
            newAuthorInput,
            moreAuthors,
            getAuthor
            }} >
                {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider}
