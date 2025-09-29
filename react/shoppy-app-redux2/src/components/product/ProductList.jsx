import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    const { productList } = useContext(ProductContext);
    const { createProduct } = useProduct();
    const [number, setNumber] = useState(3);

    useEffect(()=>{  
        createProduct(number);
    }, [number]);   
    
    return (
        <div>
                {productList && productList.map((rowArray, idx) => 
                    <div className='product-list' key={idx} >
                        {rowArray && rowArray.map((product, idx) =>
                            <Link to={`/products/${product.pid}`}>
                                <ProductAvatar img={product.image} key={idx} />  
                            </Link>                          
                        )}
                    </div>
                 )}
        </div>
    );
}

