import { Title, SubTitle, BottomDescription } from './base/Title.jsx';
import { ContactLink } from './footer/ContactLink.jsx';

export function Footer({data}) {
    return (
    <footer id="contact" class="footer">
        <Title title="Let's Talk" />
        <SubTitle title="com.developer.judy@gmail.com" />
        <ContactLink links={data.links} />     
        <BottomDescription 
         description="Junior Software Engineer Judy's Portfolio - All right reserved" />   
    </footer>
    );
}