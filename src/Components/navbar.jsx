import React from "react";
import { Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <navLink to="/About" activeStyle>
                About</navLink>
                <navLink to="/contact" activeStyle>
                Contact</navLink>
                <navLink to="/blogs" activeStyle>
                Blogs</navLink>
                <navLink to="/sign-up" activeStyle>
                Sign up</navLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;