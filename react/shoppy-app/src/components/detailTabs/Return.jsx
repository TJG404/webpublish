import React, { useState, useEffect } from 'react';
import { axiosData } from '../../utils/dataFetch.js';

export function Return() {
    const [returnData, setReturnData] = useState({});
    useEffect(()=> {
        const fetch = async() => {
            const jsonData = await axiosData("/data/productReturn.json");
            setReturnData(jsonData);
        }
        fetch();
    }, [])

    console.log(returnData);
    

    return (
        <div>
            <div style={{paddingTop:"20px"}}></div>
            <h4>{returnData && returnData.title}</h4>
            <p>{returnData && returnData.description}</p>
        </div>
    );
}

