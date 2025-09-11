import { ProductImage } from './ProductImage.jsx';
import { Icon } from '../commons/Icon.jsx';

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, icon, icon_style, cartCount}) {
    const handleAddCart = () => {
        cartCount();
    }    

    const {bg, color, radius, width, height} = icon_style;
       

    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} /> 
            {/* <span className="best-product-img-no">{rank}</span> */}
            <Icon   value={rank}
                    bg={bg}
                    color={color}
                    radius={radius}
                    width={width}
                    height={height}
                    />
            { like?  
                <span className="best-product-img-like"
                      onClick={handleAddCart}>{icon}</span> : "" }
        </div>
    );
}