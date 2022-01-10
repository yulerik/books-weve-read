import React from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'



import Home from './components/Home'
import PublicBook from './components/PublicBook'
import PublicBooksHome from './components/PublicBooksHome'
import BookCard from './components/BookCard'
import AuthorCard from './components/AuthorCard'
import GenreCard from './components/GenreCard'
import Authors from './components/Authors'
import Books from './components/Books'
import Genres from './components/Genres'
import Footer from './components/Footer'


function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='public-books'>Public Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path ='./' element={<App />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path='public-books' element={<PublicBook />}>
                        <Route index element={<PublicBooksHome />}></Route>
                        <Route path='books' element={<Books />}>
                            <Route path='authors/:authorId' element={<AuthorCard />}></Route>
                        </Route>
                        <Route path='authors' element={<Authors />}>
                            <Route path='books/:bookId' element={<BookCard />}></Route>
                        </Route>
                        <Route path='genres' element={<Genres />}>
                            <Route path='genres/:genreId' element={<GenreCard />}></Route>
                        </Route>
                    </Route>
            </Routes>
            <Outlet />
            <Footer />

        </>
    )
}

export default App