import React from 'react'

import Button from './Button'
import Cart from './Cart'
import Searchbar from './Searchbar'
import PersonIcon from '@mui/icons-material/Person';

import "./css/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-img-container'/>       
      <div className='logo-name'>GamesS</div>
      <Searchbar/>
      <Button>Pesquisar</Button>
      <Cart/>      
      <Button>
        <PersonIcon  sx={{fontSize: 20} }/>        
      </Button>
    </div>
  )
}

export default Navbar