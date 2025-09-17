import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ContactLink({links}) {
    return (
        <ul class="contact-links">
            { links && links.map(link => 
                <li>
                    <a class="contact-link" href={link.href}>
                    { link.type === "github" && <FontAwesomeIcon icon={faGithub} />}    
                    { link.type === "linkedin" && <FontAwesomeIcon icon={faLinkedin} />}    
                    </a>
                </li>
            )}
        </ul>
    );
}