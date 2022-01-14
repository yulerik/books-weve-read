import React, { useContext } from 'react'
import { BookContext } from '../bookContext'

function NewBook() {
    const {
        handleFiction,
        handleNonFiction,
        newAuthorInput,
        newBookSubmit,
        newBookForm,
        handleNewBookForm,
        publicAuthors,
        fiction,
        nonFiction,
        handleNewAuthor,
        handleMoreAuthors,
        newAuthorFormInput,
        newAuthorSubmit,
        handleNewGenre,
        newGenreFormInput,
        newGenreSubmit,
        showDisplay,
        setShowDisplay,
        showAuthor,
        setShowAuthor,
        showGenre,
        setShowGenre
    } = useContext(BookContext)
    // option tag for each author
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
                name='fiction'
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
                name='non-fiction'
                id={genre._id}
                key={genre._id}
            ></input>
            <label>{genre.subType}</label>
        </li>
    )
    // change button text hide/show
    const buttonText = showDisplay.show ? 'Add a new Book' : 'Hide Book Form'
    const authorFormButtonText = showAuthor.show ? 'Add a new Author' : 'Hide Author Form'
    const genreFormButtonText = showGenre.show ? 'Add a new Genre sub-type' : 'Hide Genre Form'

    return (
        <div id='new-book'>
            <button
                style={{backgroundColor: !showDisplay.show && '#8A307F'}}
                onClick={() => {
                    setShowDisplay(prev => (
                        { show: !prev.show }
                    ))
                    if (showAuthor.show === false) {
                        setShowAuthor(prev => (
                            { show: !prev.show }
                        ))
                    }
                    if (showGenre.show === false) {
                        setShowGenre(prev => (
                            { show: !prev.show }
                        ))
                    }
                }}
            >
                {buttonText}
            </button>
            <button
                style={{backgroundColor: !showAuthor.show && '#8A307F'}}
                onClick={() => {
                    setShowAuthor(prev => (
                        { show: !prev.show }
                    ))
                    if (showDisplay.show === false) {
                        setShowDisplay(prev => (
                            { show: !prev.show }
                        ))
                    }
                    if (showGenre.show === false) {
                        setShowGenre(prev => (
                            { show: !prev.show }
                        ))
                    }
                }}
            >
                {authorFormButtonText}
            </button>
            <button
                style={{backgroundColor: !showGenre.show && '#8A307F'}}
                onClick={() => {
                    setShowGenre(prev => (
                        { show: !prev.show }
                    ))
                    if (showAuthor.show === false) {
                        setShowAuthor(prev => (
                            { show: !prev.show }
                        ))
                    }
                    if (showDisplay.show === false) {
                        setShowDisplay(prev => (
                            { show: !prev.show }
                        ))
                    }
                }
                }
            >
                {genreFormButtonText}
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
                <form onChange={handleFiction}>
                    <ul className='newFiction'>
                        {fictionGenres}
                    </ul>
                </form>
                <label>Pick all Non-Fiction genres that apply: </label>
                <form onChange={handleNonFiction}>
                    <ul id='new-non-fiction'>
                        {nonFictionGenres}
                    </ul>
                </form>
                <label>Add other applicable authors:</label>
                <form name='moreAuthors' onChange={handleMoreAuthors}>
                    <ul id='additional-authors'>
                        {authorsCheckbox}
                    </ul>
                </form>
                <button>Add book</button>
            </form>
            <form
                style={{ display: showAuthor.show ? 'none' : 'flex' }}
                id='new-author-form'
                onSubmit={newAuthorSubmit}
                name='newAuthor'
            >
                <label>Author's Name: </label>
                <input
                    name='name'
                    type='text'
                    onChange={handleNewAuthor}
                    value={newAuthorFormInput.name}
                    required
                ></input>
                <button>New Author</button>
            </form>
            <form
                style={{ display: showGenre.show ? 'none' : 'flex' }}
                id='new-genre-form'
                onSubmit={newGenreSubmit}
                name='newGenre'
            >
                <label>New Genre: </label>
                <ul>
                    <li>
                        <label>Fiction</label>
                        <input type='radio' value='fiction' name='type' defaultChecked></input>
                    </li>
                    <li>
                        <label>Non-Fiction</label>
                        <input type='radio' value='non-fiction' name='type'></input>
                    </li>
                </ul>
                <label>Enter Genre sub-type: </label>
                <input
                    name='subType'
                    type='text'
                    onChange={handleNewGenre}
                    value={newGenreFormInput.subType}
                    required
                ></input>
                <button>New Genre</button>
            </form>
        </div>
    )
}

export default NewBook