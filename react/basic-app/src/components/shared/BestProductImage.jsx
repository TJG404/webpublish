import { ProductImage } from './ProductImage.jsx';
import { Icon } from '../commons/Icon.jsx';

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, icon, icon_style, cartCount}) {
    const handleAddCart = () => {
        cartCount();
    }    

    //index.js의 StrickMode가 해제되어 있는 경우, 개발자가 객체, 배열등을 코드로 체크 로직
    // const {bg, color, radius, width, height} = icon_style || {} ;       

    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} /> 
            {/* <span className="best-product-img-no">{rank}</span> */}
            <Icon   value={rank}
                    bg={icon_style.bg}
                    color={icon_style.color}
                    radius={icon_style.radius}
                    width={icon_style.width}
                    height={icon_style.height}
                    />
            { like?  
                <span className="best-product-img-like"
                      onClick={handleAddCart}>{icon}</span> : "" }
        </div>
    );
}