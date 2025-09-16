import { Title, Description } from "../base/Title.jsx";
import { Majors} from "./Majors.jsx";
import { Jobs } from "./Jobs.jsx";

export function About() {  

    return (
        <section id="about" className="section container">
           <Title title="About me" />
           <Description />    
           <Majors />  
           <Jobs />
        </section>
    );
}