import { Component } from 'react'
import './navbar.css'

const Navbar = () => (
    <div className='navbar' id='navbar'>
        <nav>
            <input type='checkbox' id='check'></input>
            <label for='check' className='checkBtn'>
                <i class="fa fa-bars"></i>
            </label>
            <ul>
                <li><a href='#banner'>Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    </div>
)

export default Navbar