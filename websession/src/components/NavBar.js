import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';
import {setModal} from "../store/modalSlice";

export default function NavBar() {
    const [query, setQuery] = useState('')

    const data = useSelector(state => state.products)
    const modal = useSelector(state => state.modal)

    const dispatch = useDispatch()

    const filteredData = () =>
        [
            ...data.burgers.filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
            ...data.drinks.filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
            ...data.others.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        ]

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                        aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand"><img src="DCBE4921-003C-4289-B293-3AED3C4911DC.PNG" alt="Иконка"
                                                 className="img-fluid me-2" height="0,1px"/>BinTim</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sales">Акции</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/location">Адреса</Link>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                   role="button" aria-expanded="false">Меню</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/menu'>Основное меню</Link></li>
                                    <li><Link className="dropdown-item" to='/drinks'>Напитки</Link></li>
                                    <li><Link className="dropdown-item" to='/others'>Другое</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/order">Оформить заказ</a></li>
                                </ul>
                            </li>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" style={ {position: 'relative'} }>
                        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" value={query} onChange={e => setQuery(e.target.value)}/>
                        <div className='search_block' style={ {display: query ? 'block' : 'none'} }>
                            {filteredData().length ?
                                filteredData().map((item, i) =>
                                    <div key={i}>
                                        <img src={item.img} alt=""/>
                                        <h6>{item.name}</h6>
                                    </div>
                                )
                            : <p>Нет результатов...</p>}
                        </div>
                        <button className="btn btn-outline-success me-2" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form>
                    <button type="button" className="btn btn-outline-primary" onClick={() => dispatch(setModal('auth'))}>
                        <a className="nav-link" href="#">Войти</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}