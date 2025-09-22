import React, { useState, useEffect } from 'react';
import { axiosData } from '../../utils/dataFetch.js';

export function Review() {
    const [reviewData, setReviewData] = useState({});

    useEffect(()=>{
        const fetch = async() => {
            const jsonData = await axiosData("/data/productReview.json");
            setReviewData(jsonData);
        }
        fetch();
    }, []);

    // console.log('review--> ', reviewData);
    
    return (
        <div>
            
        </div>
    );
}

