import { Title, SubTitle } from "../base/Title.jsx";
import { AvatarImage } from "../base/Avatar.jsx";

export function Testimonials({testimonials}) {
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial" />
            <SubTitle title="See What they say about me" />

            <ul class="testimonials">
                {testimonials && testimonials.map(item => 
                    <li class="testimonial">
                        <AvatarImage    img={item.img}
                                        msg={item.alt}
                                        style="testimonial-img"  />
                        <div class="testimonial-text">
                            <p>{item.description}</p>
                            <p><a href="#" class="testimonial-text-name">{item.name}</a> / {item.company}</p>                            
                        </div>
                    </li>                
                )}
            </ul>
        </section>
    );
}