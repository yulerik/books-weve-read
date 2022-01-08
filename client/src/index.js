import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {BookContextProvider} from './bookContext'
import App from './App'

ReactDOM.render(
    <BookContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BookContextProvider>
, document.getElementById('root'))