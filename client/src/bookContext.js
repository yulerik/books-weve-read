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
    const [authorSearchInputs, setAuthorSearchInputs] = useState({name: ''})
    const [authorSearchResults, setAuthorSearchResults] = useState([])
    const [genreSearchInputs, setGenreSearchInputs] = useState({subType: ''})
    const [genreSearchResults, setGenreSearchResults] = useState([])
    const [newBookForm, setNewBookForm] = useState({title: ''})
    const [newAuthorInputId, setNewAuthorInputId] = useState({_id: ''})
    const [secAuthorId, setSecAuthorId] = useState([])
    const [booksByAuthor, setBooksByAuthor] = useState([])
    const [booksByGenre, setBooksByGenre] = useState([])

    // get books with a certain genre
    function getGenre(id) {
        axios.get(`/public-books/genres/${id}/books`)
            .then(res => setBooksByGenre(res.data))
            .catch(err => console.log(err))
    }
    // get books with a certain author
    function getAuthor(id) {
        axios.get(`/public-books/authors/${id}/books`)
            .then(res => setBooksByAuthor(res.data))
            .catch(err => console.log(err))
    }
    // get all books    
    function getPublicBooks() {
        axios.get('/books')
            .then(res => setPublicBooks(res.data))
            .catch(err => console.log(err))
    }
    // get all authors
    function getPublicAuthors() {
        axios.get('/authors')
            .then(res => setPublicAuthors(res.data))
            .catch(err => console.log(err))
    }
    // filters all genres into fiction/nonFiction
    function filterFictions(genres) {
        const fiction = genres.filter(each => each.type === 'fiction')
        const nonFiction = genres.filter(each => each.type === 'non-fiction')
        setFiction(fiction)
        setNonFiction(nonFiction)
    }
    // get all genres
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
    // search db for book 
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
    // search db for author
    function authorSearch(event) {
        event.preventDefault()
        if (event.target.name.value === '') {
            return
        } else {
            axios.get(`search/books?name=${event.target.name.value}`)
                .then(res => {
                    setAuthorSearchResults(res.data)
                    setAuthorSearchInputs({name: ''})
                })
                .catch(err => console.log(err))
        }
    }
    // search db for genre
    function genreSearch(event) {
        event.preventDefault()
        if (event.target.subType.value === '') {
            return
        } else {
            axios.get(`search/genres?subType=${event.target.subType.value}`)
                .then(res => {
                    setGenreSearchResults(res.data)
                    setGenreSearchInputs({subType: ''})
                })
                .catch(err => console.log(err))
        }
    }
    // input for title of book
    function searchInput(event) {
        const {name, value} = event.target
        setSearchInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    // input for name of author
    function authorSearchInput(event) {
        const {name, value} = event.target
        setAuthorSearchInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    // input for subType of genre
    function genreSearchInput(event) {
        const {name, value} = event.target
        setGenreSearchInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function findGenre(id) {
        const genre = publicGenres.find(each => each._id === id)
        return genre
    }
    // add new book to db
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
        // axios.post('/books', newBook)
        //     .then(res => {
        //         console.log(res)
        //         getPublicBooks()
        //     })
        //     .catch(err => console.log(err))
    }
    function handleNewBookForm(event) {
        const {name, value} = event.target
        setNewBookForm(prevInputs => ({...prevInputs, [name]: value}))
    }
    function newAuthorInput(event){
        console.log(event.target.value)
        setNewAuthorInputId(prevInputs => ({_id: event.target.value}))
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
            authorSearchInputs,
            genreSearchInputs,
            genreSearchInput,
            genreSearch,
            authorSearchInput,
            authorSearch,
            getGenre,
            findBook,
            bookSearch,
            searchInput,
            newBookSubmit,
            handleNewBookForm,
            newAuthorInput,
            getAuthor
            }} >
                {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider}
