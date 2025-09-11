
export function Icon({value, bg, color, radius, width, height}) {
    return (
        <span   className="best-product-img-no"
                style={{backgroundColor: bg, color: color, 
                        borderRadius:radius,
                        width: width,
                        height: height }}>{value}</span>
    );
}