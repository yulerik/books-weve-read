import React, { useContext } from 'react'
import {BookContext} from '../bookContext'

function NewGenre() {
    const {publicGenres} = useContext(BookContext)

    const subTypes = publicGenres.map(genre => {
        return <option key={genre._id}>{genre.subType}</option>
    })

    return (
        <>
        <form>
            <label>Genre:</label>
            <select name='filter'>
                <option value=''>genre type:</option>
                <option name='type' value='fiction'>Fiction</option>
                <option name='type' value='non-fiction'>Non-Fiction</option>
            </select>
            <select>
                <option>genre sub-type:</option>
                {subTypes}
            </select>
        </form>
        </>
    )
}

export default NewGenre