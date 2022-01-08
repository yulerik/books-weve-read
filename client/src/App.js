import React from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'



import Home from './components/Home'
import PublicBook from './components/PublicBook'
import BookCard from './components/BookCard'
import AuthorCard from './components/AuthorCard'
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
                    <Route path='public-books'element={<PublicBook />}></Route>
                    <Route path='books/:bookId' element={<BookCard />}></Route>
                    <Route path='authors/:authorId' element={<AuthorCard />}></Route>
            </Routes>
            <Outlet />
            <Footer />

        </>
    )
}

export default App