import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BookContext = React.createContext()

function BookContextProvider(props) {
    const [publicBooks, setPublicBooks] = useState([])
    const [publicAuthors, setPublicAuthors] = useState([])
    const [publicGenres, setPublicGenres] = useState([])
    const [fiction, setFiction] = useState([])
    const [nonFiction, setNonFiction] = useState([])
    const [searchInputs, setSearchInputs] = useState({ title: '' })
    const [searchResults, setSearchResults] = useState([])
    const [authorSearchInputs, setAuthorSearchInputs] = useState({ name: '' })
    const [authorSearchResults, setAuthorSearchResults] = useState([])
    const [genreSearchInputs, setGenreSearchInputs] = useState({ subType: '' })
    const [genreSearchResults, setGenreSearchResults] = useState([])
    const [newBookForm, setNewBookForm] = useState({ title: '' })
    const [newAuthorFormInput, setNewAuthorFormInput] = useState({ name: '' })
    const [newGenreFormInput, setNewGenreFormInput] = useState({ subType: '' })
    const [newAuthorInputId, setNewAuthorInputId] = useState({ _id: '' })
    const [secAuthorId, setSecAuthorId] = useState([])
    const [fictionForNewBook, setFictionForNewBook] = useState([])
    const [nonFictionForNewBook, setNonFictionForNewBook] = useState([])
    const [booksByAuthor, setBooksByAuthor] = useState([])
    const [booksByGenre, setBooksByGenre] = useState([])
    const [showDisplay, setShowDisplay] = useState({ show: true })
    const [showAuthor, setShowAuthor] = useState({ show: true })
    const [showGenre, setShowGenre] = useState({ show: true })

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
                    setSearchInputs({ title: '' })
                    if (res.data.length === 0) {
                        alert(`no books with that title`)
                    }
                })
                .catch(err => console.log(err))
        }
        event.target.title.value = ''
    }
    // search db for author
    function authorSearch(event) {
        event.preventDefault()
        if (event.target.name.value === '') {
            return
        } else {
            axios.get(`search/authors?name=${event.target.name.value}`)
                .then(res => {
                    setAuthorSearchResults(res.data)
                    setAuthorSearchInputs({ name: '' })
                    if (res.data.length === 0) {
                        alert(`no authors with that name, add the author before adding any books by this author.`)
                    }
                })
                .catch(err => console.log(err))
        }
        event.target.name.value = ''
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
                    setGenreSearchInputs({ subType: '' })
                    if (res.data.length === 0) {
                        alert(`no genre sub-type in fiction or non-fiction with that genre title.`)
                    }
                })
                .catch(err => console.log(err))
        }
        event.target.subType.value = ''
    }
    // input for title of book
    function searchInput(event) {
        const { name, value } = event.target
        setSearchInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    // input for name of author
    function authorSearchInput(event) {
        const { name, value } = event.target
        setAuthorSearchInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    // input for subType of genre
    function genreSearchInput(event) {
        const { name, value } = event.target
        setGenreSearchInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    function findGenre(id) {
        const genre = publicGenres.find(each => each._id === id)
        return genre
    }
    // add new book to db
    // need to clear inputs after successfull post call
    function newBookSubmit(event) {
        event.preventDefault()
        const newBook = {}
        newBook.title = newBookForm.title
        newBook.author = newAuthorInputId._id
        newBook.genre = []
        if (secAuthorId.length > 0) newBook.author = [newAuthorInputId._id, ...secAuthorId]
        if (fictionForNewBook.length > 0) newBook.genre.push(...fictionForNewBook)
        if (nonFictionForNewBook.length > 0) newBook.genre.push(...nonFictionForNewBook)
        axios.post('/books', newBook)
            .then(res => {
                getPublicBooks()
                setNewBookForm({ title: ''})
                setShowDisplay(prev => ({ show: !prev.show }))
                setSecAuthorId([])
                setFictionForNewBook([])
                setNonFictionForNewBook([])
            })
            .catch(err => console.log(err))
    }
    // add new author to db
    function newAuthorSubmit(event) {
        event.preventDefault()
        const newAuthor = {}
        newAuthor.name = newAuthorFormInput.name
        axios.post('/authors', newAuthor)
            .then(res => {
                getPublicAuthors()
                setNewAuthorFormInput({ name: '' })
                setShowAuthor(prev => ({ show: !prev.show }))
            })
            .catch(err => console.log(err))
    }
    // add new genre to db
    function newGenreSubmit(event) {
        event.preventDefault()
        const newGenre = {}
        newGenre.subType = newGenreFormInput.subType
        const fictionChecked = event.target[0].checked
        const nonFictionChecked = event.target[1].checked
        if (fictionChecked) newGenre.type = 'fiction'
        if (nonFictionChecked) newGenre.type = 'non-fiction'
        axios.post('/genres', newGenre)
            .then(res => {
                getPublicGenres()
                setNewGenreFormInput({ subType: '' })
                setShowGenre(prev => ({ show: !prev.show }))
            })
            .catch(err => console.log(err))
    }
    function handleNewBookForm(event) {
        const { name, value } = event.target
        setNewBookForm(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    function handleNewAuthor(event) {
        const { name, value } = event.target
        setNewAuthorFormInput(prev => ({ ...prev, [name]: value }))
    }
    function handleNewGenre(event) {
        const { name, value } = event.target
        setNewGenreFormInput(prev => ({ ...prev, [name]: value }))
    }
    function handleMoreAuthors(event) {
        const { id, checked } = event.target
        if (checked) setSecAuthorId(prev => [...prev, id])
        if (!checked) setSecAuthorId(prev => {
            const index = prev.findIndex(each => each === id)
            prev.splice(index, 1)
            return [...prev]
        })
    }
    function handleFiction(event) {
        const { id, checked } = event.target
        if (checked) setFictionForNewBook(prev => [...prev, id])
        if (!checked) setFictionForNewBook(prev => {
            const index = prev.findIndex(each => each === id)
            prev.splice(index, 1)
            return [...prev]
        })
    }
    function handleNonFiction(event) {
        const { id, checked } = event.target
        if (checked) setNonFictionForNewBook(prev => [...prev, id])
        if (!checked) setNonFictionForNewBook(prev => {
            const index = prev.findIndex(each => each === id)
            prev.splice(index, 1)
            return [...prev]
        })
    }

    function newAuthorInput(event) {
        setNewAuthorInputId(prevInputs => ({ _id: event.target.value }))
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
            authorSearchResults,
            genreSearchResults,
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
            newAuthorFormInput,
            newGenreFormInput,
            showDisplay,
            showGenre,
            showAuthor,
            setSearchResults,
            setAuthorSearchResults,
            setGenreSearchResults,
            handleFiction,
            handleNonFiction,
            handleMoreAuthors,
            setShowDisplay,
            setShowAuthor,
            setShowGenre,
            newGenreSubmit,
            handleNewGenre,
            newAuthorSubmit,
            handleNewAuthor,
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

export { BookContext, BookContextProvider }
