/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */
export function AvatarImageList({imgList}) {
    
    return (
        <>
            { imgList.map(item => 
                <img src={item.img} className={item.style} />
            ) }
        </>
    );
}