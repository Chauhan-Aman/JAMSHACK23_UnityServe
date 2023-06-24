import React from 'react'

const Product = (props) => {

    const { product, image } = props

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>
            <div className="container">
                <div className="container productpage_heading my-4">
                    <h1 className="display-4">PRODUCT PAGE</h1>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4 container-fluid">
                    <div className="col ms-3">
                        <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                                <h4 className="display-7 lh-1 fw-bold py-2 mb-3 fs-1">{product.Product_Name}</h4>
                                <img src={image.image} alt="" className="product_image-cus" />
                                <p className="services_box_text lead mt-3 fs-4 ">{product.Description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="seller_box card-cover overflow-hidden rounded-4 mx-3 wh-owner ms-5 ">
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
                                <h4 className="display-7 lh-1  py-2 fs-2">Seller Name : {product.Owner_Name}</h4>
                                <div >
                                    <p className="services_box_text lead fs-5 ">College : {product.College}</p>
                                    <p className="services_box_text lead fs-5 ">Contact : {product.Phone}</p>
                                    <p className="services_box_text lead fs-5">Email : {product.Email}</p>
                                    <p className="services_box_text lead fs-5">Instagram : ( {product.Instagram} )</p>
                                </div>

                            </div>
                            <div className='mt-5 buy-prod-page'>
                                <button type="button" className="btn btn-outline-info text-xs buy-prod-page" id="buy_button" disabled>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product