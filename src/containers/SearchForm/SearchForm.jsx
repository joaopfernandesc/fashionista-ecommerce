import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { handleSearchForm } from "../../actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import SearchProduct from '../../components/SearchProduct'
import './SearchForm.scss';

function SearchForm() {
  const [searchItems, setSearchItems] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const products = useSelector(state => state.products)
  const isOpen = useSelector(state => state.openSearch)
  const dispatch = useDispatch()

  function handleClosing() {
    dispatch(handleSearchForm(false))
  }

  function handleSearchClick() {
    handleClosing()
    setSearchItems([])
    setSearchInput("")
  }

  function handleSearch(event) {
    if (event.target.value.trim() !== ""){
      const result = products.filter(prod => prod.name.includes(event.target.value.toUpperCase()))
      setSearchInput(event.target.value)
      setSearchItems(result)
    } else {
      setSearchInput("")
      setSearchItems([])
    }
  }

  return (
    <div className={`sidebar ${isOpen ? "sidebar--is-open" : ""}`}>
      <div className={`sidebar__topbar ${isOpen ? "sidebar__topbar--is-open" : ""}`}>
        <header className="sidebar__topbar__header">
          <button className='sidebar__topbar__icon' onClick={() => handleClosing()}>
            <FontAwesomeIcon icon={faArrowLeft} key="arrow-left"/>
          </button>
          <div className="sidebar__topbar__text">
            Busca de Produtos
          </div>
        </header>
      </div>
      <div className="sidebar__form">
        <span>Buscar</span>
        <input className="sidebar__form__field" type="text" placeholder="Buscar produto" value={searchInput} onChange={handleSearch}/>
      </div>
      <div className="sidebar__body">
        { searchItems.map(item => {
          return (
            <Link 
              to={`/product/${item.name.toLowerCase().replace(/ /g, "-")+ '-' + item.code_color}`} 
              onClick={() => handleSearchClick()} 
              key={item.style + item.code_color}
            >
              <SearchProduct 
                product={item}
              />
            </Link>)
        })}
      </div>
    </div>
  );
}

export default SearchForm;
