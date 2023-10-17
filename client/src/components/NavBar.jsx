// Posts List Link (Root Path) | Link to Create New Post (Post Form)
import React from 'react';
//import { React, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav >
            <Link to="/">Post List</Link>
            {" | "}
            <Link to="/new">New Post</Link>
        </nav>
    );
}

// return (
//     <nav className="nav-wrapper red darken-3">
//         <div className="container">
//             <Link to="/" className="brand-logo">Poke'Times</Link>
//             <ul className="right">
//                 <li><Link to="/">Home</Link></li>
//                 <li><NavLink to="/about">About</NavLink></li>
//                 <li><NavLink to="/contact">Contact</NavLink></li>
//             </ul>
//         </div>
//     </nav>
// )

export default NavBar;