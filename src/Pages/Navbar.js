import React from "react";


import { Link, NavLink } from "react-router-dom";

const Navbar =()=>{
    return(
        <div className="navbar">
            {/*  This way use re load  so variable not store
            <a href="/">Home</a>
            <a href="/about">about</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a> */}
            {/*
              This way give ase not reload All components
            <Link to="/">Home</Link>
            <Link to="/about">about</Link> 
            <Link to="/blog">Blog </Link> 
            <Link to="/contact">Contact</Link> */}
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">about</NavLink> 
            <NavLink to="/blog">Blog </NavLink >
            <NavLink to="/contact">Contact</NavLink> 

            
        </div>
    )
}

export default Navbar;