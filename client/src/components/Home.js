import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div id='home'>
            <h1>Books We've Read</h1>
            <p>users coming soon.<br></br>
            Click on <Link to='public-books'>public books</Link> to start.</p>
        </div>
    )
}

export default Home