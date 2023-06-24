import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../context/products/ProductContext'
import Buyitem from './Buyitem'

const MarketPlace = () => {

    const context = useContext(ProductContext)
    const { products, getProducts } = context

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProducts()
            getImage()
            document.title = "UnityServe-MarketPlace";
        }
        else {

        }
        // eslint-disable-next-line
    }, [])

    const [allimage, SetAllimage] = useState([])

    const getImage = async () => {
        const response = await fetch("http://localhost:7000/api/product/get-image", {
            method: "GET",
            crossDomain: true,
            headers: {
                "auth-token": localStorage.getItem('token')
            },
        })
        const json = await response.json()
        SetAllimage(json)
    }

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>

            <nav className="navbar navbar-expand-lg py-2 mb-3">
                <div className="navbar_everything container-fluid mx-5">
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav ms-auto mx-2 me-3">
                            {/* <div class="form-check mx-1 mt-1">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label text-white fs-6" for="flexRadioDefault1">
                                    SELL
                                </label>
                            </div>
                            <div class="form-check mx-1 mt-1">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label text-white fs-6" for="flexRadioDefault2">
                                    REQUEST
                                </label>
                            </div>
                            <div class="form-check mx-1 me-2 mt-1">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label text-white fs-6" for="flexRadioDefault2">
                                    RENT
                                </label>
                            </div> */}
                            <li className="nav-item px-2" id="sec_nav-item">
                                <Link className="nav-link" aria-current="page" to="/marketplace" id="current" >BUY</Link>
                            </li>
                            <li className="nav-item px-1" id="sec_nav-item">
                                <Link className="nav-link" to="/marketplace/sell">SELL</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container d-flex flex-wrap">
                <div className="container mx-1">
                    {products.length === 0 ? <h1 className='text-white text-center fonts-fam'>No Products to Buy/Rent</h1> :
                        <>
                            <div className='d-flex'>
                                <h1 className='text-white text-center mb-3 fonts-fam me-1 ms-3'>Products to Buy/Rent</h1>
                                {/* <form className="d-flex ms-4 " style={{ width: "320px",height:"45px" }} role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success hover-custom" type="submit" style={{border:"1px solid #72b044",color:"#72b044"}}>Search</button>
                            </form> */}
                            </div>
                        </>
                    }
                </div>
                {products.map((product, index) => {
                    const image = allimage[index];
                    if (image) {
                        return <Buyitem key={product._id} product={product} image={image} />;
                    }
                    return null;
                })}

            </div>
        </>
    )
}

export default MarketPlace