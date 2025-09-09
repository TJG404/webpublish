import { AvatarImage } from "./AvatarImage.jsx";

export function Avatar({img, name}) {
    return (
        <div className="avatar">
            <AvatarImage img={img} style="avatar-img-circle"/>
            <p>{name}</p>
        </div>
    );
}