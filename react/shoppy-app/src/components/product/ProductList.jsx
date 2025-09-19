import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';

export function ProductList() {
    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3);

    useEffect(()=>{  
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }, [number]);
   
    
    return (
        <div>
                {rows && rows.map((rowArray, idx) => 
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

