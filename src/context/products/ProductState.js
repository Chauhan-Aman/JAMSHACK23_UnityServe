import React, { useState } from 'react'
import ProductContext from './ProductContext'

const ProductState = (props) => {

    const host = "http:localhost:7000"

    const ProductsInitial = []

    const [products, setProducts] = useState(ProductsInitial)

    // Get all products
    const getProducts = async () => {
        //Api call
        const response = await fetch(`${host}/api/product/fetchallproducts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        })
        const json = await response.json()
        setProducts(json)
    }

    //Add a product 
    const addProduct = async () => {
        //Api call
        const response = await fetch(`${host}/api/product/addproduct`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        })
        const product = await response.json()
        setProducts(products.concat(product))
    }

    return (
        <ProductContext.Provider value={{ products, getProducts, addProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState