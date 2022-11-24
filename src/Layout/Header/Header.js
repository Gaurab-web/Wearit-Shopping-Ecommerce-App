import React, { useState } from 'react'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { FaUserPlus } from 'react-icons/fa'
import { RiLoginCircleFill, RiHomeSmileFill } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AddCart from '../../Component/Products/CartSection/addCart.json'
import ProtectRouting from '../../Routing/ProtectRouting'

export default function Header() {
    const navigate = useNavigate();

    const isloggedIn = window.sessionStorage.getItem('Token');

    const fname = window.sessionStorage.getItem('FName');

    const lname = window.sessionStorage.getItem('LName');

    const user = window.sessionStorage.getItem('User_id');

    const logOuthandle = ()=>{
        window.sessionStorage.clear();
        navigate('/login_user');
    };

    const cartItem = AddCart.cartItems;
    const showCart = cartItem.filter((data)=> data.user_id === user);
    const countCart = showCart.length;

    const [modal, setModal] = useState(false);

    const modalOpen = ()=>{
        setModal(true);
    };

    const modalClose = ()=>{
        setModal(false);
    }

    return (
        <>
            <Navbar bg="light" variant="light" sticky='top' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="../../../../Images/logo_1.png"
                            alt="logo_png"
                            className='logo-img'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to="/" className='home'>H<RiHomeSmileFill className='home-icon' />
                                ME</Nav.Link>
                            <Nav.Link as={Link} to="/about_page">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/category_page" onClick={modalOpen}>CATEGORY</Nav.Link>
                            <Nav.Link as={Link} to="/contact_us_page" onClick={modalOpen} >CONTACT US</Nav.Link>
                        </Nav>

                        { isloggedIn ?
                            <Nav>
                                <Nav.Link as = {Link} to = {`/user_detail/${fname}/${lname}`}>Welcome {fname}</Nav.Link>
                                <Nav.Link onClick={logOuthandle} className = "log-out">LOGOUT</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Dropdown className='imp-drop'>
                                    <Dropdown.Toggle variant='light' id="dropdown-basic" title="account" className='drop-nav'>
                                        <HiOutlineUser style={{ fontSize: "24px" }} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='drop-menu'>
                                        <h5 className='ps-3 mt-2 mb-3 account'>My Account</h5>
                                        <Divider component="h5" />
                                        <Dropdown.Item as={Link} to="/login_user" className='drop-some mt-2 mb-2'>
                                            <RiLoginCircleFill className='me-2' />
                                            Login
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/register_user" className='drop-some'>
                                            <FaUserPlus className='me-2' />
                                            Register
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                {/* For Smaller screen */}
                                <Nav.Link as = {Link} to = "/login_user" className='sm-sc-sec'>LOGIN</Nav.Link>
                                <Nav.Link as = {Link} to = "/register_user" className='sm-sc-sec'>REGISTER</Nav.Link>
                            </Nav>
                        }
                        <Nav as = {Link} to = '/view_cart_page' className='cart-part'>
                            <IconButton className='cart-icon' onClick={modalOpen}>
                                <Badge badgeContent={countCart} color="primary" >
                                    <LocalMallIcon color="action" />
                                </Badge>
                            </IconButton>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <ProtectRouting data = {modal} func1 = {modalClose} />
        </>
    )
}
