import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <>
    
    <div className="bgCover1 bg-fixed"></div>
    
    <nav className="navbar navbar-expand-lg py-2 mb-3">
        <div className="navbar_everything container-fluid mx-5">

            <div className="collapse navbar-collapse " id="navbarNavDropdown">

                <ul className="navbar-nav ms-auto mx-2 me-3">
                    <li className="nav-item px-2" id="sec_nav-item">
                        <Link className="nav-link" aria-current="page" to="/marketplace" id="current" >BUY/RENT</Link>
                    </li>
                    <li className="nav-item px-1" id="sec_nav-item">
                        <Link className="nav-link" to="/marketplace/sell">SELL</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4 container-fluid">
            <div className="col">
                <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                        <h4 className="display-7 lh-1 fw-bold py-2">product/service</h4>
                        {/* <img src="" alt="product image" className="product_image"/> */}
                        <p className="services_box_text lead ">chota sa product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi.</p>
                        <p className="services_box_text">seller name</p>
                        <a href="product.html"><button type="button" className="btn btn-outline-info text-xs" id="buy_button">BUY NOW</button></a>
                    </div>
                </div>
            </div> 
            <div className="col">
                <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                        <h4 className="display-7 lh-1 fw-bold py-2">product/service</h4>
                        {/* <img src="" alt="product image" className="product_image"/> */}
                        <p className="services_box_text lead ">chota sa product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi.</p>
                        <p className="services_box_text">seller name</p>
                        <a href="product.html"><button type="button" className="btn btn-outline-info text-xs" id="buy_button">BUY NOW</button></a>
                    </div>
                </div>
            </div> 
            <div className="col">
                <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                        <h4 className="display-7 lh-1 fw-bold py-2">product/service</h4>
                        {/* <img src="" alt="product image" className="product_image"/> */}
                        <p className="services_box_text lead ">chota sa product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi.</p>
                        <p className="services_box_text">seller name</p>
                        <a href="/"><button type="button" className="btn btn-outline-info text-xs" id="buy_button">BUY NOW</button></a>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    </>
  )
}

export default Buy