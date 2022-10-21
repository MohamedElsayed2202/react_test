import { Link, NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { useHistory } from 'react-router-dom';

const NavBar = props => {

    const [movieName, setMovieName] = useState('');

    const history = useHistory();
    
    const search = (e) => {
        e.preventDefault();
        setMovieName('');
        history.push(`/search/?query=${movieName}`);
    }
    return (
        <nav className={"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"}>
            <div className={"container-fluid"}>
                <NavLink className={"navbar-brand"} to="/">Movies</NavLink>
                <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarSupportedContent">

                    <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                        <li className={"nav-item"}>
                            <NavLink activeClassName="text-danger" className={"nav-link"} aria-current="page" to="/favorites">Favorit</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink activeClassName="text-danger" className={"nav-link"} to="/login">Login</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink activeClassName="text-danger" className={"nav-link"} to="/register">Register</NavLink>
                        </li>
                    </ul>
                    <form className={"d-flex"} onSubmit={(e) => search(e)}>
                        <input className={"form-control me-2"} type="search" placeholder="Search" aria-label="Search" value={movieName} onChange={(e) => {
                            setMovieName(e.target.value)
                        }} />
                        <button className={"btn btn-outline-success"} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar