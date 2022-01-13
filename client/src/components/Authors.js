import React, {useContext} from 'react'
import {BookContext} from '../bookContext'
import {Link} from 'react-router-dom'

function Authors() {
    const {publicAuthors} = useContext(BookContext)
    // link for each author
    const displayAuthors = publicAuthors.map(each =>
        <Link 
            state={publicAuthors.find(author => author._id === each._id)} 
            to={each._id}
             key={each._id}
        >
            <h3>{each.name}</h3>
        </Link>
    )

    return (
        <div>
            <h1>All Authors</h1>
            {displayAuthors}
        </div>
    )
}

export default Authors