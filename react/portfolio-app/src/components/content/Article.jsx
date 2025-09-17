
export function Article({ children, style }) {
    return (
         <article className={style} >
            {children}
         </article>
    );
}

/**
 * SkillsTitle
 */
export function SkillsTitle({title}) {
    return (
        <h3 class="skill-title">{title}</h3>
    );
}

/**
 * CodingSkills
 */
export function CodingSkills({skills}) {
    // const skills = [
    //     {"title": "HTML", "value":"98%", "width":"98%"},
    //     {"title": "CSS", "value":"90%", "width":"90%"},
    //     {"title": "JavaScript", "value":"90%", "width":"90%"},
    //     {"title": "TypeScript", "value":"80%", "width":"80%"},
    //     {"title": "React", "value":"79%", "width":"79%"},
    //     {"title": "NodeJS", "value":"68%", "width":"68%"}
    // ];

    return (
        <ul>
            {skills && skills.map(skill =>
                <li class="bar">
                    <div class="bar-title"><span>{skill.title}</span><span>{skill.value}</span></div>
                    <div class="bar-bg"><div class="bar-value" style={{width: skill.width}}></div></div>
                </li>            
            )}
        </ul>
    );
}