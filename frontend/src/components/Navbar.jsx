import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {

  const quantity=useSelector(state=> state.cart.quantity);
  const user=useSelector(state=>state.user.currentUser);
  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>

        <div className='navbar__left'>
          <span className='navbar__language'>
            EN
          </span>

          <div className='navbar__searchConatainer'>

            <input placeholder='Search' />
            <SearchIcon style={{color:"gray",fontSize:"16px"}}/>
          </div>
        </div>
        <Link style={{textDecoration: 'none',color:'white'}} to='/'>

          <div className='navbar__center'>
            <h1>
              ARTKART
            </h1>
          </div>
        </Link>
        <div className='navbar__right'>


       {!user&& 
       <div>  
       <Link to='/register'>
          <div className='navbar__menuItem'>
            Register
          </div>
        </Link>
        <Link to='/login'>
          <div className='navbar__menuItem'>
            Sign In
          </div>
        </Link>
        </div>
      }
      {user&& 
       <div>  
       <Link to='/register'>
          <div className='navbar__menuItem' style={{textTransform:'uppercase'}}>
            {user.username}
              {/* {console.log(user)} */}
          </div>
        </Link>
       
        </div>
      }
         

          <Link to='/cart'>

          <div className='navbar__menuItem'>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
           
          </div>
          </Link>
          
        </div>

      </div>

    </div>
  )
}

export default Navbar