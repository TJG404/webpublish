import { Title, SubTitle } from "../base/Title.jsx";
import { AvatarImage } from "../base/Avatar.jsx";

export function Testimonials() {
    const testimonials = [
        {
            "img": "/images/testimonials/people1.webp",
            "alt": "people2",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name": "James Kim",
            "company": "Google"
        },
        {
            "img": "/images/testimonials/people2.webp",
            "alt": "people2",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name": "Smith Park",
            "company": "Samsung"
        },
        {
            "img": "/images/testimonials/people3.webp",
            "alt": "people3",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name": "Anna Jin",
            "company": "Kakao"
        },
    ];

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