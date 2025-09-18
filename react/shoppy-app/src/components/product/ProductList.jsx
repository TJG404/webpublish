import React, { useState, useEffect} from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { fetchData, axiosData } from '../../utils/dataFetch.js';

export function ProductList() {
    const [list, setList] = useState([]);

    useEffect(()=>{  
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            setList(jsonData);
        }
        load();
    }, []);
   
    //출력 포맷 함수 : 한줄에 상품 3개씩 출력
    // const rows = [];  // [ [{}, {}, {}], [{}, {}, {}], [{}] ]
    // for(let i=0; i<list.length; i+=3) {
    //     rows.push(list.slice(i, i+3)); //0~2, slice 새로운 배열 반환
    // }

    const rows = list.reduce((acc, cur, idx) => {
        if(idx % 3 === 0) acc.push([cur])
        else acc[acc.length-1].push(cur);
        return acc;
    }, []);

    return (
        <div>
                {rows && rows.map((rowArray, idx) => 
                    <div className='product-list' key={idx} >
                        {rowArray && rowArray.map((product, idx) => 
                            <ProductAvatar img={product.image} key={idx} />                            
                        )}
                    </div>
                 )}
        </div>
    );
}

