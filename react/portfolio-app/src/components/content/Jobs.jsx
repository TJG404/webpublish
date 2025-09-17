
export function Job({ img, msg, name, period}) {
    return (
        <>
            <img src={img} alt={msg} />
            <div>
                <p  className="job-name">{name}</p>
                <p  className="job-period">{period}</p>
            </div>
        </>
    );
}


export function Jobs({ jobs }) {
    return (
        <ul className="jobs">
            { jobs && jobs.map(job => 
                <li className="job">
                    <Job img={job.img}
                         msg={job.msg}
                         name={job.name}
                         period={job.period} />
                </li>      
            )}
        </ul>
    );
}