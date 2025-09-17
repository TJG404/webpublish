
export function List({titles}) {
    return (
        <ul>
        {titles && titles.map(title => 
            <li>{title}</li>
        )}
        </ul>
    );
}