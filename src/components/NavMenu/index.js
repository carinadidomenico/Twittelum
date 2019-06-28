import React, { Component } from "react";
import {Link} from 'react-router-dom'
import navMenuStyles from "./navMenu.module.css";

export default class NavMenu extends Component {

  render() {
    return (
      <nav className={navMenuStyles.navMenu}>
        <ul className={navMenuStyles.navMenu__lista}>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/">
              Bem vindo(a):<br/>
              <strong>{this.props.usuario}</strong>
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/">
              Página Inicial
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/hashtags">
              Hashtags
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            {/* para redirecionar links internos importe {Link} from 'react-router-dom e a tag <Link></Links> e para links externos use <a></a> */}
            <Link className={navMenuStyles.navMenu__link} onClick={() => localStorage.removeItem ('TOKEN')} to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
