import React, { useEffect, useContext } from 'react';
import ProductContext from '../context/products/ProductContext';
import Buyitem from './Buyitem';
import { useHistory } from 'react-router-dom';

const MyProducts = () => {
    const context = useContext(ProductContext);
    const { products, getUserProducts } = context;

    useEffect(() => {
        async function fetchdata(){
            await getUserProducts();
        }
        fetchdata()
        //eslint-disable-next-line
    }, []);

    const history = useHistory()

    const handleAddProduct = () => {
        history.push('/marketplace/sell')
    }

    return (
        <div className='d-flex container flex-wrap'>
            {
                products.length !== 0
                    ? products.map(product => (
                        <Buyitem key={product._id} product={product} />
                    ))
                    : <div className='No-available-my-products'>
                        <h1 className='text-white text-center mb-3 fonts-fam me-1 ms-3'>You've Not Added any Products in MarketPlace Yet...</h1>
                        <p className='text-white text-center mb-3 fonts-fam me-1 ms-3'>Click To Add Your First Product</p>
                        <button className="btn btn-outline-info text-xs my-1" id="submit_button" onClick={handleAddProduct}>Add Product</button>
                    </div>
            }
        </div>
    );
};

export default MyProducts;
