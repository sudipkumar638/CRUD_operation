import React, { useEffect, useState } from 'react'
import { NavLink, } from 'react-router-dom';
import "./navbar.css";
import { getData } from '../Actions/Action';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchedData } from '../Services/ApiCalls';
const Navbar = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.Getdataredducer.data)
    const [search, setSearch] = useState("");
    async function serachOnTyping(e) {
        setSearch(e.target.value);
        const data = await getSearchedData(e.target.value);
        console.log(data.data)
        dispatch(getData(data.data));
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <NavLink to={"/"} className="navbar-brand">
                    <img className="logo img-fluid" src="https://img.freepik.com/free-vector/cute-rabbit-holding-gun-pistol-cartoon-vector-icon-illustration-animal-weapon-icon-concept-isolated_138676-6861.jpg"></img>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link">
                                HomePage
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/createusers"} className="nav-link">
                                CreateUser Page
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to={"/updateuser"} className="nav-link">
                                UpdateUser Page
                            </NavLink>

                        </li>

                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" onChange={serachOnTyping} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar