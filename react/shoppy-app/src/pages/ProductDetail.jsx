import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosData } from '../utils/dataFetch.js';

export function ProductDetail() {
    const {pid} = useParams();  // { pid: 1}
    const [product, setProduct] = useState({});

    useEffect(()=> {
        const filterData = async () => {
            const jsonData = await axiosData("/data/products.json");
            const [filterProduct] = await jsonData.filter((item) => item.pid === pid);
            setProduct(filterProduct);                  
        }
        filterData();
    }, []);

    // console.log("--->", product);
    

    return (
        <div className="content">
            <div className='product-detail-top'>
                <div className='product-detail-image-top'>
                    <img src={product.image} />
                </div>
                <ul className='product-detail-info-top'>
                    <li className='product-detail-title'>{product.name}</li>
                    <li className='product-detail-title'>
                        {`${parseInt(product.price).toLocaleString()}원`}
                        {/* {parseInt(product.price).toLocaleString()}원 */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

