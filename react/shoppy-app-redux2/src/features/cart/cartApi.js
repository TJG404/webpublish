import { addCartList, countIncrement, showCartList, setTotalPrice
    , updateCartList, updateTotalPrice
} from './cartSlice.js';
import { axiosData } from '../../utils/dataFetch.js';           

//장바구니 아이템 추가
export const addCart = (cartItem) => async(dispatch) =>  {  // <-- ProductDetail 쇼핑백 추가 이벤트 처리
    dispatch(addCartList({"cartItem": cartItem}));
    dispatch(countIncrement());
}

//장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가 
export const showCart = () => async(dispatch) => {
    const fetch = async() => {
        const jsonData = await axiosData("/data/products.json");
        dispatch(showCartList({"products": jsonData}));
        dispatch(setTotalPrice({"products": jsonData}));
    }
    fetch();
}

export const updateCart = (cid, type, price) => async(dispatch) => {
    console.log("cartApi-",cid, type);    
    dispatch(updateCartList({"cid":cid, "type":type}));
    dispatch(updateTotalPrice({"price":price, "type":type}));   

}

