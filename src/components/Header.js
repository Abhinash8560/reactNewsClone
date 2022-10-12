import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height:"4rem"}}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">NewsWeb</NavLink>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default Header