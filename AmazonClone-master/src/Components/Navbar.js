import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar () {
  return (
    <div className='navbar'>
      <nav>
        <MenuIcon style={ { color: 'white', fontsize: '20px' } } />
        <p onclick="handleOpensidebar()">
          {/* <i class="fa fa-bars" style="color: white" aria-hidden="true">All</i> */ }
        </p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Gift Cards</p>
        <p>Buy Again</p>
        <p>Amazon Pay</p>
        <p>Prime</p>
        <p>Health</p>
        <p>Household</p>
        <p>Personal Care</p>
      </nav>
    </div>
  )
}

export default Navbar