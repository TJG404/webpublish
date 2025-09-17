import { Article, SkillsTitle, CodingSkills } from "./Article.jsx";
import { List } from '../base/List.jsx';

export function SkillsContent({data}) {
    return (
        <div class="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills" />
                <CodingSkills skills={data.coding}/>
            </Article>
            <Article style="skills-tools">
                <SkillsTitle title="Tools" />
                <List titles={data.tools} />
            </Article>
            <Article style="skills-etc">
                <SkillsTitle title="Etc" />
                <List titles={data.etc} />
            </Article>
        </div>
    );
}