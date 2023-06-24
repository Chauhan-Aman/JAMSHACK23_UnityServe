import React, { useState } from 'react'
import ProductContext from './ProductContext'

const ProductState = (props) => {

    const host = "http://localhost:7000"

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
    const addProduct = async (Product_Name, Description, Options, Owner_Name, College, Phone, Email, Instagram, Address, Amount) => {
        //Api call
        const response = await fetch(`${host}/api/product/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ Product_Name, Description, Options, Owner_Name, College, Phone, Email, Instagram, Address, Amount })
        })
        const product = await response.json()
        setProducts(products.concat(product))
    }

    // //Search a product
    // const searchproduct = async (name) => {
    //     const response = await fetch(`${host}/api/product/searchproduct/${name}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "auth-token": localStorage.getItem('token')
    //         }
    //     })
    //     const json = await response.json()
    //     let searchproducts = JSON.parse(JSON.stringify(products))
    //     for(let index =0;products.Product_Name!==name;index++){

    //     }
    // }

    return (
        <ProductContext.Provider value={{ products, getProducts, addProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState