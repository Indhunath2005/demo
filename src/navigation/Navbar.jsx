import React from 'react'
import'./Navbar.css'
import{link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
    <div classname="navbar">
        <nav>
            <ui>
                <link to="/"><li>Home</li></link>
                <link to="/work"><li>Work</li></link>
                <link to="/contact"><li>Contact</li></link>
            </ui>
        </nav>
    </div>
    </div>
  )
}

export default navbar