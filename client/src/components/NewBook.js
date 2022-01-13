import React, { useContext, useState } from 'react'
import { BookContext } from '../bookContext'

function NewBook() {
    const { moreAuthors, newAuthorInput, newBookSubmit, newBookForm, handleNewBookForm, publicAuthors, fiction, nonFiction } = useContext(BookContext)
    const [showDisplay, setShowDisplay] = useState({ show: true })
    // option tage for each author
    const authors = publicAuthors.map(each => 
        <option 
            id={each.name} 
            value={each._id}
            key={each._id}
        >
            {each.name}
        </option>
    )
    // checkbox for each additional author
    const authorsCheckbox = publicAuthors.map(each => 
        <li>
            <input 
                className='more-authors' 
                type='checkbox' 
                name='author' 
                id={each._id}
                key={each._id}
            ></input>
            <label>{each.name}</label>
        </li>
    )
    // checkbox for each fiction genre
    const fictionGenres = fiction.map(genre => 
        <li>
            <input 
                className='fiction' 
                type='checkbox' 
                id={genre._id}
                key={genre._id}
            ></input>
            <label>{genre.subType}</label>
        </li>
    )
    // checkbox for each nonFiction genre
    const nonFictionGenres = nonFiction.map(genre => 
        <li>
            <input 
                className='non-fiction' 
                type='checkbox' 
                id={genre._id}
                key={genre._id}
            ></input>
            <label>{genre.subType}</label>
        </li>
    )
    // change button text hide/show
    const buttonText = showDisplay.show ? 'Add a new Book' : 'Hide Book Form'

    return (
        <div id='new-book'>
            <button 
                onClick={() => 
                    setShowDisplay(prev => ({ show: !prev.show }))
                }
                >
                    {buttonText}
                </button>
            <form
                style={{ display: showDisplay.show ? 'none' : 'flex' }}
                id='new-book-form'
                onSubmit={newBookSubmit}
                name='newBook'
            >
                <label>Title:</label>
                <input
                    name='title'
                    onChange={handleNewBookForm} 
                    value={newBookForm.title} 
                    required
                >
                </input>
                <select 
                    onChange={newAuthorInput} 
                    required
                >
                    <option value=''>Pick atleast one author</option>
                    {authors}
                </select>
                <label>Pick all Fiction genres that apply: </label>
                <ul className='newFiction'>
                    {fictionGenres}
                </ul>
                <label>Pick all Non-Fiction genres that apply: </label>
                <ul id='new-non-fiction'>
                    {nonFictionGenres}
                </ul>
                <label>Add other applicable authors:</label>
                <ul id='additional-authors'>
                    {authorsCheckbox}
                </ul>
                <button>Add book</button>
            </form>
        </div>
    )
}

export default NewBook