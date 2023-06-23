import React from 'react'

const Product = () => {
  return (
    <>
    
    <div className="bgCover1 bg-fixed"></div>
    <div className="container">
        <div className="container productpage_heading my-4">
            <h1 className="display-4">PRODUCT PAGE</h1>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4 container-fluid">
            <div className="col">
                <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                        <h4 className="display-7 lh-1 fw-bold py-2">product/service</h4>
                        {/* <img src="" alt="product image" className="product_image"/> */}
                        <p className="services_box_text lead ">chota sa product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi.</p>
                        <p className="services_box_text">seller name</p>
                        {/* <!-- <a href="product.html"><button type="button" className="btn btn-outline-info text-xs" id="buy_button">BUY NOW</button></a> --> */}
                    </div>
                </div>
            </div> 
            <div className="col">
                <div className="seller_box card-cover overflow-hidden  rounded-4 mx-3 ">
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                        <h4 className="display-7 lh-1 fw-bold py-2">seller name</h4>
                        
                        <p className="services_box_text lead ">seller details</p>
                        <p className="services_box_text">seller contact</p>
                        {/* <!-- <a href="product.html"><button type="button" className="btn btn-outline-info text-xs" id="buy_button">BUY NOW</button></a> --> */}
                    </div>
                </div>
            </div> 
        </div>
    </div>
    </>
  )
}

export default Product