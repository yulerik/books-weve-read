import React from 'react'
// import {ThemeContext} from './themeContext'


function Footer(props) {

    // const {scrollToTop} = useContext(ThemeContext)
    // const [visible, setVisible] =useState(false)

    // function toggleVisible() {
    //     const scrolled = document.documentElement.scrollTop
    //     if (scrolled > 1000) {
    //         setVisible(true)
    //     } else if (scrolled <= 1000) {
    //         setVisible(false)
    //     }
    // }

    // window.addEventListener('scroll', toggleVisible)

    return (
        <footer>
            <p>footer information</p>
            {/* <button style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>Back to top</button> */}
        </footer>
    )
}

export default Footer