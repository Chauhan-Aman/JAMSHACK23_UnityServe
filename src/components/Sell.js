import React from 'react'

const Sell = () => {
    return (
        <>

            <div className="bgCover1 bg-fixed"></div>

            <nav className="navbar navbar-expand-lg mb-3">
                <div className="navbar_everything container-fluid mx-5">

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav ms-auto mx-2 me-3">
                            <li className="nav-item px-2" id="sec_nav-item">
                                <a className="nav-link" aria-current="page" href="marketplace_buy.html">BUY/RENT</a>
                            </li>
                            <li className="nav-item px-1" id="sec_nav-item">
                                <a className="nav-link" href="marketplace_sell.html" id="current">SELL</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="sell_page container">
                <div className="sell_heading mb-4">
                    <h1>Sell on UnityServe</h1>
                    <p className="lead">Generate a post to sell a product/service</p>
                </div>
                <div className="sell_form">
                    <form action="">
                        <div className="product_section mx-2">
                            <div className="col">
                                <div className="sell_product_name my-4">
                                    <p className="lead">Product Name</p>
                                    <input type="text" name="product" id="product_name" placeholder="PRODUCT NAME" required className="inputbox" />
                                </div>
                                <div className="sell_product_description my-4">
                                    <p className="lead">Provide brief Product Description</p>
                                    <input type="text" name="description" placeholder="PRODUCT DESCRIPTION" maxlength="300" required className="inputbox" id="product_description" />
                                </div>
                                <div className="sell_product_image my-4">
                                    <p className="lead">Upload Image</p>
                                    <input type="image" src="" alt="product image" placeholder="Upload product image" className="inputbox" id="image_upload" />
                                </div>
                            </div>
                        </div>
                        <div className="seller_section mx-3">
                            <div className="col">
                                <div className="seller_name my-4">
                                    <p className="lead">Your Name</p>
                                    <input type="text" name="name" id="" placeholder="SELLER NAME" required className="inputbox" />
                                </div>
                                <div className="seller_college my-4">
                                    <p className="lead">College Name</p>
                                    <input type="text" name="college" id="" placeholder="COLLEGE NAME" required className="inputbox" />
                                </div>
                                <div className="seller_contact my-4">
                                    <p className="lead">Phone Number</p>
                                    <input type="tel" name="phone" id="" placeholder="(+91-XXXXXXXXXX)" pattern="(+91)-[0-9]{10}" maxlength="10" minlength="10" required className="inputbox" />
                                </div>
                                <div className="seller_email my-4">
                                    <p className="lead">Your Email ID</p>
                                    <input type="email" name="email" id="" placeholder="YOUR EMAIL ID" className="inputbox" />
                                </div>
                                <div className="seller_instagram my-4">
                                    <p className="lead">Your Instagram (optional)</p>
                                    <input type="text" name="instagram" id="" placeholder="INSTAGRAM @" className="inputbox" />
                                </div>
                                <div className="seller_address my-4">
                                    <p className="lead">Your Address</p>
                                    <input type="text" name="address" id="" placeholder="YOUR ADDRESS" className="inputbox" />
                                </div>
                            </div>
                        </div>
                        <div className="submit mt-1">
                            <input type="text" name="amount" id="" placeholder="Amount" className="inputbox mx-2 Amount" />
                            <button type="submit" className="btn btn-outline-info text-xs my-1" id="submit_button">SELL</button>
                        </div>


                    </form>
                </div>
            </div>

        </>
    )
}

export default Sell