import React from 'react'
import '../App.css'
// import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';


function Header() {
    const cartitems = useSelector((state) => {
        return state.basket.item
    })

    return (

        <div className="header">
            {/* <img src=".../Ima" alt="Logo" /> */}
            <div className="headerTexts">
                <h3>Home</h3>
            </div>

            <div className="headerTexts">
                <LocationOnIcon style={{ color: 'white', fontSize: '30px' }} />
                <div className="headerTexts">
                    <p>Deliver to Ankisha</p>
                    <h3>Nagpur 440009</h3>
                </div>
            </div>

            / {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
            {/* <InputLabel htmlFor="outlined-adornment-password"></InputLabel> */}
            {/* <OutlinedInput */}
            {/* id="outlined-adornment-password" */}
            {/* type='text' */}
            {/* endAdornment={ */}
            {/* <InputAdornment position="end"> */}
            {/* <IconButton */}
            {/* aria-label="toggle password visibility" */}
            {/* // onClick={ handleClickShowPassword } */}
            {/* // onMouseDown={ handleMouseDownPassword } */}
            {/* edge="end" */}
            {/* > */}
            {/* < SearchIcon /> */}
            {/* { showPassword ? <VisibilityOff /> : <Visibility /> } */}
            {/* </IconButton> */}
            {/* </InputAdornment> */}
            {/* } */}
            {/* label="Password" */}
            {/* /> */}
            {/* </FormControl> */}


            <input type="text" placeholder="Search amazon.in" />

            <div className="headerData">
                <div className="headerTexts">
                    <p>Hello,Sign In</p>
                    <h3>Account & Lists</h3>
                </div>
                <ArrowDropDownIcon style={{ color: "white", fontSize: "30px" }} />
            </div>

            <div className="headerTexts headerReturn">
                <p>Returns</p>
                <h3>& Orders</h3>
            </div>
            <div>
                {/* cart items */}
                <Badge badgeContent={cartitems} color="primary">
                    <ShoppingCartIcon style={{ color: "White", fontSize: "30px" }} />
                </Badge>
            </div>


        </div>

    )
}

export default Header