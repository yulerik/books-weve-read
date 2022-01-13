import React, { useContext } from 'react'
import {BookContext} from '../bookContext'
import {Link} from 'react-router-dom'

function Genres() {
    const {publicGenres, fiction, nonFiction} = useContext(BookContext)
    // returns genre object
    function findGenre(id) {
        const genre = publicGenres.find(each => each._id === id)
        return genre
    }
    // link for each fiction genre
    const displayFiction = fiction.map(each => {
        return (
            <Link 
                state={findGenre(each._id)} 
                to={`../genres/${each._id}`} 
                key={each._id}
            >
                <h4>{each.subType}</h4>
            </Link>
        )
        
    })
    // link for each nonFiction genre
    const displayNonFiction = nonFiction.map(each => 
        <Link 
            state={findGenre(each._id)} 
            to={`../genres/${each._id}`} 
            key={each._id}
        >
            <h4>{each.subType}</h4>
        </Link>
        )

    return (
        <div>
            <h1>All Genres</h1>
            <div>
                <h1>Fiction</h1>
                {displayFiction}
            </div>

            <div>
                <h1>Non-Fiction</h1>
                {displayNonFiction}
            </div>
        </div>
    )
}

export default Genres