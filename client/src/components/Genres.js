import React, { useContext } from 'react'
import {BookContext} from '../bookContext'
import {Link} from 'react-router-dom'

function Genres() {
    const {publicGenres, fiction, nonFiction} = useContext(BookContext)
    const displayFiction = fiction.map(each => {
        return (
            <Link to={`../genres/${each._id}`}>
                <h4>{each.subType}</h4>
            </Link>
        )
        
    })
    const displayNonFiction = nonFiction.map(each => {
       return <h4>{each.subType}</h4>
    })
    console.log(displayFiction)
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