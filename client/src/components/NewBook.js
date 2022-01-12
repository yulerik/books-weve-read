import React, {useContext} from 'react'
import {BookContext} from '../bookContext'

function NewBook() {
    const {moreAuthors, newAuthorInput, newBookSubmit, newBookForm, handleNewBookForm, publicAuthors, fiction, nonFiction} = useContext(BookContext)

    const authors = publicAuthors.map(each => {
        return <option id={each.name} value={each._id}>{each.name}</option>
    })
    const authorsCheckbox = publicAuthors.map(each => {
        return <><input type='checkbox' name='author' id={each._id}></input><label>{each.name}</label></>
    })
    const fictionGenres = fiction.map(genre => {
        return <><input type='checkbox' id={genre._id}></input><label>{genre.subType}</label></> 
    })
    const nonFictionGenres = nonFiction.map(genre => {
        return <><input type='checkbox' id={genre._id}></input><label>{genre.subType}</label></> 
    })

    return (
        <form onChange={moreAuthors} onSubmit={newBookSubmit} name='newBook'>
            <label>Title:</label>
            <input name='title' onChange={handleNewBookForm} value={newBookForm.title}></input>
            <select onChange={newAuthorInput}>
                <option value=''>Pick atleast one author</option>
                {authors}
            </select>
            <label>Add other applicable authors: </label>
            {authorsCheckbox}
            <label>Pick all Fiction genres that apply: </label>
            {fictionGenres}
            <label>Pick all Non-Fiction genres that apply: </label>
            {nonFictionGenres}
            <button>Add book</button>
        </form>
    )
}

export default NewBook