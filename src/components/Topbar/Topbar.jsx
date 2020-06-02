import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';


import './Topbar.scss';

const Topbar = () => {
    const [openShoppingCart, setOpenShoppingCart] = useState(false);
    const [openSearch, setOpenSearch] = useState(true);

    function handleShoppingCart(event) {
    }

    function handleOpenSearch(event) {
    }
    return (
        <header className="topbar" data-testid="topbar">
            <div className="container">
                <Link to="/" className="topbar__logo">
                    <img  src={logo} alt="logo"/>
                </Link>
                <div className="topbar__group">
                    <button className="topbar__icon" onClick={(event) => handleOpenSearch(event)}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="topbar__icon" onClick={(event) => handleShoppingCart(event)}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Topbar;
