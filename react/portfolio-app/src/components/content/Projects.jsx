
export function Project({img, alt, title, description}) {
    return (
        <>
            <img class="project-img" src={img} alt={alt}/>
            <div class="project-metadata">
                <h3 class="project-metadata-title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export function Projects() {
    const projects = [
        {
            "img" : "/images/projects/project1.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project2.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project3.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project4.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project5.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project6.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project7.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
        {
            "img" : "/images/projects/project8.webp",
            "alt" : "project1",
            "title" : "Project #1",
            "description" : "Clone Coding with HTML, CSS",
        },
    ];

    return (
        <ul class="projects">
            {projects && projects.map(project => 
                <li class="project">
                    <Project img={project.img}
                             alt={project.alt}
                             title={project.title}
                             description={project.description}
                        />
                </li>            
            )}
        </ul>
    );
}