import { Title, SubTitle, Description } from '../base/Title.jsx';
import { SkillsContent } from './SkillsContent.jsx';

export function Skills() {
    return (
        <section id="skill" class="section container">
            <Title title="My Skills" />
            <SubTitle title="Skills & Attributes" />
            <Description style="" />
            <SkillsContent />
        </section>
    );
}