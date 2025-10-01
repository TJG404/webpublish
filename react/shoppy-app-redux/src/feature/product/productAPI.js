import React from 'react';
import { createProduct } from './productSlice.js';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';

export const getProductList = (number) => async(dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    const rows = groupByRows(jsonData, number);
    dispatch(createProduct({"productList": rows, "products":jsonData}));
}

