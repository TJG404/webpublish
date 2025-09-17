import { useState } from "react";

export function Category({style, name, count}) {
    return (
        <button class={style}>{name}<span class="category-count">{count}</span></button>
    );
}

export function Categories({categories}) {
    const [name, setName] = useState('All');
    
    return (
        <ul class="categories">
            {categories && categories.map(category => 
                <li>
                    <Category   name={category.name}
                                count={category.count}
                                style={ name === category.name ?
                                        "category  selected" : "category"
                                    } />
                </li>
            )}
        </ul>
    );
}