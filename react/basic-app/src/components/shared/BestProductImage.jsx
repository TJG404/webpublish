import { ProductImage } from './ProductImage.jsx';
import { Icon } from '../commons/Icon.jsx';

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, icon, cartCount}) {
    const handleAddCart = () => {
        cartCount();
    }    
    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} /> 
            {/* <span className="best-product-img-no">{rank}</span> */}
            <Icon   value={rank}
                    bg="#000"
                    color="#fff"
                    radius="0"
                    width="40px"
                    height="40px"/>
            { like?  
                <span className="best-product-img-like"
                      onClick={handleAddCart}>{icon}</span> : "" }
        </div>
    );
}