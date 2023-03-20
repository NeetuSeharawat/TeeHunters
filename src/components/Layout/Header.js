import {Fragment} from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

const Header = (props) =>{
    return (
    <Fragment>
        <header className= {classes.header}>
            <h1>Shopper Stop for Tshirts</h1>

            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
    </Fragment>
)};
export default Header;