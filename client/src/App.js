import React from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import './styles.css'

import Home from './components/Home'
import PublicBook from './components/PublicBook'
import PublicBooksHome from './components/PublicBooksHome'
import BookCard from './components/cards/BookCard'
import AuthorCard from './components/cards/AuthorCard'
import GenreCard from './components/cards/GenreCard'
import Authors from './components/Authors'
import Books from './components/Books'
import Genres from './components/Genres'
import Footer from './components/Footer'


function App() {
    return (
        <>
            <ul id='nav'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='public-books'>Public Books</Link>
                </li>
            </ul>
            <Routes>
                <Route path ='/' element={<App />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path='public-books' element={<PublicBook />}>
                        <Route index element={<PublicBooksHome />}></Route>
                        <Route path='books' element={<Books />}></Route>
                        <Route path='books/:bookId' element={<BookCard />}></Route>
                        <Route path='authors' element={<Authors />}></Route>
                        <Route path='authors/:authorId' element={<AuthorCard />}></Route>
                        <Route path='genres' element={<Genres />}></Route>
                        <Route path='genres/:genreId' element={<GenreCard />}></Route>
                    </Route>
            </Routes>
            <Outlet />
            <Footer />

        </>
    )
}

export default App