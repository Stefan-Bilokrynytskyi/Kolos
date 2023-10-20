import classes from "./Header.module.scss";

import { useRef, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import Burger from "../../icons/burger.svg";
import Logo from "../../icons/logo.svg";
import Cart from "../../icons/cart.svg";
import CloseBurger from "../../icons/CloseBurgerMenu.svg";

function Header() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    <header>
      <div className={classes.header_conteiner}>
        {isNavOpen && <div className={classes.overlay}></div>}
        <div className={classes.burger_menu}>
          <button className={classes.nav_btn} onClick={showNavbar}>
            <img src={Burger} alt="menu"></img>
          </button>
        </div>
        <div className={classes.name}>КОЛОС</div>
        <img src={Logo} className={classes.logo} alt="Logo"></img>

        <div className={classes.cart_conteiner}>
          <img src={Cart} alt="cart"></img>
          <div className={classes.cart_quantity}>{cartQuantity}</div>
        </div>

        <div className={classes.stripe}></div>

        <nav className={isNavOpen ? classes.responsive_nav : ""}>
          <div className={classes.control_conteiner}>
            <button
              className={`${classes.nav_btn} ${classes.nav_close_btn}`}
              onClick={showNavbar}
            >
              <img src={CloseBurger} alt="CloseBurgerMenu" />
            </button>

            <button
              className={`${classes.nav_btn} ${classes.nav_cross_btn}`}
              onClick={showNavbar}
            >
              <AiOutlineClose className={classes.cross} />
            </button>
            <div className={classes.stripe}></div>
          </div>
          <div className={classes.menu_nav}>
            <a href="/#">Home</a>
            <a href="/#">Shop</a>
            <a href="/#">Sale</a>
            <a href="/#">About us</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
