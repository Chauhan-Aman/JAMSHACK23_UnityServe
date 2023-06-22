import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../context/products/ProductContext'
import Buyitem from './Buyitem'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const MarketPlace = () => {

    const Context = useContext(ProductContext)
    const { products, getProducts } = Context

    let history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProducts()
        }
        else {
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [])

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
            <div className=" container row my-3">
                <div className='container'>
                    {products.map((product) => {
                        return <Buyitem key={product._id} product={product} />
                    })}
                </div>
            </div>
        </>
    )
}

export default MarketPlace