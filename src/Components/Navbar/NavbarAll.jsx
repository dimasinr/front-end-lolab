import './navbar.css'
import { Navbar, Container, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Search } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import { AuthContext } from '../../Context/Context';
import { useContext } from 'react';

export const NavbarAllPages = () => {
  
const logoImage = require('./../img/logoputih.png');
const { user } = useContext(AuthContext);


    return (
      <div className="sticky-nv">
        <div className='navb_bg' style={{ width: "100%", height: "80px" }}>
      <Navbar className="rspsv" variant="dark" expand="lg">
      <Container className="ml-2" style={{ marginTop: "-40px", zIndex: "999" }}>
            <Navbar.Brand href="/">
            <span className='fs-w fw-bold logo'>
              <img src={logoImage} alt="" />
            </span>
            </Navbar.Brand>
            <Navbar.Toggle className='custom-toggler' aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="d-flex me-auto my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            </Nav>
            <Form className="d-flex d-content-mid">
                <FormControl
                type="search"
                width="160px"
                placeholder="Search treatment..."
                className="me-2"
                style={{ borderRadius: '15px', border: 'none' }}
                aria-label="Search"
                />
                <Button variant="outline-light rounded-pill"> <Search /> </Button>
            </Form>
            <Button variant="outline-light rounded-pill ml-1 m-mt-1"> <ShoppingCart /> </Button>
            {user ? <Dropdown as={ButtonGroup} className="ml-2 m-mt-1">
              <span>
                <span className='ml-1 mr-1' style={{ color: "white" }} >{user.username}</span>
              <img className="user-profile-navbar" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="" />
              </span>
            <Dropdown.Toggle split variant="standard outline-none" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="/user/profile">User Profile</Dropdown.Item>
              <Dropdown.Item href="/">
                <span onClick={() => localStorage.clear()}>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> : (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <span className='ml-4 text-white outline-light rounded-lg m-mt-3'>Login</span>
                </Link>
                )}
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      </div>
    )
}
