import React, { useEffect, useState } from 'react'
import './Header.css'
import amazon_logo from "./images/amazon_logo.png"
import SearchIcon from '@mui/icons-material/Search';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Header() {

  const [user, setUser] = useState(null);

  const [cartItems, setCartItems] = useState([])

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    setUser("")
    setCartItems([])
    navigate("/login")

  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token stored');
        }

        const response = await axios.get('http://localhost:5000/home', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);

        localStorage.setItem("userId",response.data._id)

      } catch (error) {
        console.error('Fetch user failed:', error.message);
        localStorage.removeItem('token');
      }
    };

    fetchUser();
  }, [setUser]);

  const fetchCartItems = async () => {
    
    try {
      const id = localStorage.getItem("userId")
      const response = await axios.get(`http://localhost:5000/cartitem/${id}`);
      setCartItems(response.data)
    } catch (error) {
      console.error('Error fetching cart items:', error);

    }
  };

  useEffect(() => {
    fetchCartItems()
  }, [user, cartItems]);






  return (
    <div >
      <div className='header' >
        <NavLink to="/" className='header_logo ' >
          <img className='logo' src={amazon_logo} alt="amazon-logo" />
        </NavLink>
        <div className="header_address ">
          <p className="address_lineOne">Deliver to</p>
          <div className="address_icon">
            <PlaceOutlinedIcon />
            <p className='address_lineTwo'>India</p>
          </div>

        </div>
        <div className='header_search' >
          <select className="search_select">
            <option>
              All
            </option>
          </select>

          <input className='header_search_input' type='text' placeholder='Search Amazon' />
          <SearchIcon className='search_icon' style={{ width: "45px", height: "40px", display: "flex", color: "#0F1111", background: "#febd68", }} />
        </div>
        <div className='header_nav' >
          <div className='header_options' >
            {user ? <div className='lineOne'>Hello ,{user.name}</div> : <Link to="/login" className='signin_link'>
              Hello, Sign in
            </Link>}

            <p className='lineTwo'>
              Accounts & Lists
            </p>
          </div>
          <div className='header_options' >
            <p className='lineOne'>
              Returns
            </p>
            <p className='lineTwo'>
              & Orders
            </p>
          </div>
          <NavLink to="/cartPage" className='cart_link'>
            <Badge badgeContent={cartItems.length === 0 ? "0" : cartItems.length } color="success">
              <ShoppingCartOutlinedIcon style={{ width: "45px", height: "39px", color: "  #fff" }} />
            </Badge>
            <p className='cart_lineTwo' >Cart</p>
          </NavLink>
          <div className='cart' onClick={handleLogout}>
            <LogoutIcon fontSize='large' />
            <p className='cart_lineTwo'>Logout</p>
          </div>
        </div>
      </div>
      <div className='panel'>
        <div className="panel-all ">
          <MenuIcon />
          <p>All</p>
        </div>
        <div className="panel-ops ">
          <p className="panel-li">Best Sellers</p>
          <p className="panel-li">Today's Deals</p>
          <p className="panel-li">Mobiles</p>
          <p className="panel-li">Fashion</p>
          <p className="panel-li">Electronics</p>
          <p className="panel-li">Home & Kitchen</p>


        </div>
      </div>

    </div>

  )
}

export default Header
