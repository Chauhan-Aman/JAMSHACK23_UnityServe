import React, { useContext, useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import ProductContext from '../context/products/ProductContext'
import Buyitem from './Buyitem'

const MarketPlace = () => {

    const context = useContext(ProductContext)
    const { products, getProducts, searchproduct } = context

    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProducts()
            // getImage()
            document.title = "UnityServe-MarketPlace";
        }
        else {

        }
        // eslint-disable-next-line
    }, [])

    // const [allimage, SetAllimage] = useState([])

    // const getImage = async () => {
    //     const response = await fetch("http://localhost:7000/api/product/get-image", {
    //         method: "GET",
    //         crossDomain: true,
    //         headers: {
    //             "auth-token": localStorage.getItem('token')
    //         },
    //     })
    //     const json = await response.json()
    //     SetAllimage(json)
    // }


    const [search, setSearch] = useState("")

    useEffect(() => {
        if (search !== '') {
            searchproduct(search);
        } else {
            setSearch([]);
        }
    }, [search, searchproduct])


    const OnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>

            <nav className="navbar navbar-expand-lg py-2 mb-3">
                <div className="navbar_everything container-fluid mx-5">
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav ms-auto mx-2 me-3">
                            <li className="nav-item px-2" id="sec_nav-item">
                                <Link className="nav-link" aria-current="page" to="/marketplace/donate" id={location.pathname==='/marketplace/donate'?'current':''} >DONATIONS</Link>
                            </li>
                            <li className="nav-item px-2" id="sec_nav-item">
                                <Link className="nav-link" aria-current="page" to="/marketplace/request" id={location.pathname==='/marketplace/request'?'current':''} >REQUESTS</Link>
                            </li>
                            <li className="nav-item px-2" id="sec_nav-item">
                                <Link className="nav-link" aria-current="page" to="/marketplace/rent" id={location.pathname==='/marketplace/rent'?'current':''} >RENT</Link>
                            </li>
                            <li className="nav-item px-2" id="sec_nav-item">
                                <Link className="nav-link" aria-current="page" to="/marketplace" id={location.pathname==='/marketplace'?'current':''} >BUY</Link>
                            </li>
                            <li className="nav-item px-1" id="sec_nav-item">
                                <Link className="nav-link" to="/marketplace/sell">SELL</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container d-flex flex-wrap">
                <div className="container ">
                    {products.length === 0 ?
                        <>
                            <div className='d-flex justify-content-between'>
                                <h1 className='text-white text-center mb-3 fonts-fam me-1 ms-3'>Available Products</h1>
                                <input className="form-control me-2" name='search' type="search" placeholder="Search" aria-label="Search" onChange={OnChange} value={search} style={{ width: "250px", height: "45px" }} />
                            </div>
                        </>
                        :
                        <>
                            <div className='d-flex justify-content-between'>
                                <h1 className='text-white text-center mb-3 fonts-fam me-1 ms-3'>Available Products</h1>
                                {/* <form className="d-flex ms-4 " style={{ width: "320px", height: "45px" }} role="search" onSubmit={handleSearch}> */}
                                <input className="form-control me-2" name='search' type="search" placeholder="Search" aria-label="Search" onChange={OnChange} value={search} style={{ width: "250px", height: "45px" }} />
                                {/* <button className="btn btn-outline-success hover-custom" type="submit" style={{ border: "1px solid #72b044", color: "#72b044" }}>Search</button> */}
                                {/* </form> */}
                            </div>
                        </>
                    }
                </div>
                {products.map((product) => {
                    if (product.Options === "SELL" && location.pathname==='/marketplace') {
                        return <Buyitem key={product._id} product={product} />;
                    }
                    else if (product.Options === "DONATE" && location.pathname==='/marketplace/donate') {
                        return <Buyitem key={product._id} product={product} />;
                    }
                    else if (product.Options === "REQUEST" && location.pathname==='/marketplace/request') {
                        return <Buyitem key={product._id} product={product} />;
                    }
                    else if (product.Options === "RENT" && location.pathname==='/marketplace/rent') {
                        return <Buyitem key={product._id} product={product} />;
                    }
                    return ""
                })}

            </div>
        </>
    )
}

export default MarketPlace