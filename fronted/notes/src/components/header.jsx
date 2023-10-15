import React from 'react'
import './header.css'
import img2 from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const header = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);



    useEffect(() => {
        axios.get(`http://localhost:3000/api/getAll`).then((res) => {
            if (res.data) {
                setData(res.data);
            } else {
                alert("not fetch");
            }
        });
    });

    const searching = () => {
        if (data == search) {
            setData2(data2)
        } else {
            alert('Something went wrong')
        }
    }




    return (
        <div className='container'>
            <nav className="navbar bg-body-tertiar  ">
                <div className="container-fluid">
                    <a className="navbar-brand"> <img src={img2} alt="logo" className='end' /><span className='fs-1 fw-bold notes'>Notes  </span ></a>

                    <ul className="navbar-nav me-auto mb-1 mb-lg-0 mx-5  ">
                        <li className="nav-item">
                            <Link to='/notes'>
                                <button className="btn btn-outline-success me-5" type="button">Add Note</button>
                            </Link> &nbsp;
                            <Link to='/'>
                                <button className="btn btn-outline-success me-1" type="button"> Notes</button>
                            </Link>

                        </li>

                    </ul>
                    <form className="d-flex" role="search" onChange={(e) => setSearch(e.target.value)} >
                        <input className="form-control me-2 srch" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={searching}>Search</button>
                    </form>
                </div>
            </nav >

            <ul>


                {
                    data2.map((items, index) => (
                        <li key={index}>Searching...{items.title}</li>
                    ))
                }
            </ul>
        </div >
    )
}

export default header