import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function Header() {

  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } 
  }
// console.log(dispatch);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="#"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div className="header__option">
            <span
              onClick={handleAuthentication}
              className="header__optionLineOne"
            >
              hello {!user ? "Guest" : user.email}
            </span>

            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Order</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="./c" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className=" header_optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header



// import React from 'react'
// import "./Header.css"
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';
// import { auth } from './Firebase';
// const Header = () => {
//     const [{ basket, user }, dispatch] = useStateValue();
//     const handleAuthentication = () => {
//         if (user) {
//             auth.signOut();
//         }
//     };

//     return (
//         <div className="header">
//             <Link to="/">
//                 <img
//                     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                     alt=""
//                     className="header__logo"
//                 />
//             </Link>
//             <div className="header__search">
//                 <input type="text" className="header__searchInput" />
//                 <SearchIcon className="header__searchIcon" />
//             </div>
//             <div className="header__nav">
//                 <Link to={!user && "/login"}>
//                     <div onClick={handleAuthentication} className="header__option">
//                         <span className="header__optionLineOne">Hello {!user ? "Guest" : user?.email}</span>
//                         <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
//                     </div>
//                 </Link>
//                 <div className="header__option">
//                     <span className="header__optionLineOne">Returns</span>
//                     <span className="header__optionLineTwo">&Orders</span>
//                 </div>
//                 <div className="header__option">
//                     <span className="header__optionLineOne">Your</span>
//                     <span className="header__optionLineTwo">Prime</span>
//                 </div>
//                 <Link to="./checkout">
//                     <div className="header__optionBasket">
//                         <ShoppingBasketIcon />
//                         <span className="header__optionLineTwo header__basketCount">
//                             {basket.length}
//                         </span>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default Header