import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ setSearch }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">E-Commerce</h1>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <NavLink className='nav-link' to="/">Home</NavLink>
                        </li>
                        <li className='nav-item active'>
                            <NavLink className='nav-link' to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
