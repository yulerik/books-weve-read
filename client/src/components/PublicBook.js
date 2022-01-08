import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BookContext} from '../bookContext'




function PublicBook(props) {
    const {publicBooks} = useContext(BookContext)
    const [filter, setFilter] = useState([])
    
    const display = filter.map(each => {

        return <Link to={`../books/${each._id}`} key ={each._id}>
            <h5>{each.title}</h5>
            <Link to={`../authors/${each.author}`} key={each.author}>
                <h6>Author Link</h6>
            </Link>
        </Link>
        })

    useEffect(() => {
        setFilter(publicBooks)
    }, [publicBooks])
    
    return (
        <>
            <h1>Public Book List</h1>
            {display}
        </>
    )
}

export default PublicBook