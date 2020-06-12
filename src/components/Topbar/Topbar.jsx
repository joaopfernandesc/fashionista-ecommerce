import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';


import './Topbar.scss';
import { handleSearchForm, handleShoppingCart } from '../../actions';

const Topbar = () => {
    const dispatch = useDispatch()
    const { totalItems } = useSelector(state => state)

    function handleOpenCart() {
        dispatch(handleShoppingCart(true))
    }

    function handleOpenSearch() {
        dispatch(handleSearchForm(true))
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
                    <button className="topbar__icon" onClick={(event) => handleOpenCart(event)}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        {
                            totalItems > 0 && <div>{totalItems}</div>
                        }
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Topbar;
