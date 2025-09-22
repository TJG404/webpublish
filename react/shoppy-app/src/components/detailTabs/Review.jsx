import React, { useState, useEffect } from 'react';
import { axiosData } from '../../utils/dataFetch.js';
import { StarRating } from '../commons/StarRating.jsx';
import { ImageList } from '../commons/ImageList.jsx';
import { FaRegCircleQuestion } from 'react-icons/fa6'

/**
 * ProductDetail > Review
 */
export function Review() {
    const [reviewData, setReviewData] = useState({});

    useEffect(()=>{
        const fetch = async() => {
            const jsonData = await axiosData("/data/productReview.json");
            setReviewData(jsonData);
        }
        fetch();
    }, []);
    
    return (
        <div>
            <ReviewTop data={reviewData} />
            <ReviewList />
        </div>
    );
}

/**
 * ProductDetail > Review > ReviewTop
 */
export function ReviewTop({ data }) {
    return (
        <div className='review-top'>
            <div style={{paddingTop:"20px"}}></div>
            <h3>상품 만족도(569)</h3>
            <ul className='review-top-list'>
                <li>
                    <div>
                        <p className='review-top-text'>
                          구매하신 분들의 상품에 대한 평점입니다.  
                        </p>
                        <StarRating totalRate={3.6}
                                    style="star-black-big" />
                    </div>
                </li>
                { data.topList && data.topList.map(item => 
                    <li>
                        <ReviewType title={item.title}
                                    names={item.names}
                                    values={item.values}
                        />
                    </li>
                )}
            </ul>
            <ImageList  imgList={data.topImgList}
                        className="review-top-imglist" />
        </div>
    );
}

/**
 * ProductDetail > Review > ReviewTop > ReviewType
 */
export function ReviewType({title, names, values}) {
    return (
        <div className='review-type'>
            <p className='review-type text'>{title}</p>
            {names && names.map((name, idx) => 
                <div className="bar-metadata">
                    <span className="bar-text1">{name}</span>
                    <div className="bar-bg">
                    <div
                        className="bar-value"
                        style={{ width: `${values[idx]}%` }}
                    ></div>
                    </div>
                    <span className="bar-text2">{values[idx]}%</span>
                </div>
            )}
        </div>
    );
}

/**
 * ProductDetail > Review > ReviewList
 */
export function ReviewList() {
    return (
        <div>
            <ul className='review-list-title'>
                <li><button type="button">최신순</button></li>
                <li><button type="button">평점 높은순</button></li>
                <li><button type="button">평점 낮은순</button></li>
                <li><button type="button">추천순<FaRegCircleQuestion /></button></li>
            </ul>
        </div>
    );
}