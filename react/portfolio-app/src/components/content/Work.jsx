import { Title, SubTitle } from '../base/Title.jsx';
import { Categories } from './Categories.jsx';
import { Projects } from './Projects.jsx';

export function Work() {
    return (
        <section id="work" class="section container">
            <Title title="My Work" />
            <SubTitle title="Projects" />
            <Categories />
            <Projects />            
        </section>
    );
}