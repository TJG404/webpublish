
export function AvatarImage({img, msg, style}) {
    return (
         <img src={img} 
              alt={msg}
              className={style} />
    );
}