import { Avatar } from "./Avatar.jsx";

/**
 * Avatar 컴포넌트 리스트 
 */
export function AvatarList({list, className}) {
    return (
        <div className={className}>
            { list.map( item => <Avatar img={item.img} name={item.name}/> ) }
        </div>
    );
}