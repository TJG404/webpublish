import { useState } from "react";

export function Counter({click}) {
    const [number, setNumber] = useState(0);

    const handleClickIncrement = () => {
        (number < 10) ? setNumber(number+1) : setNumber(number);  
        click(number);   //부모에게 number 전달    
    }
    const handleClickDecrement = () => {
        (number > 0) ? setNumber(number-1) : setNumber(0);  
        click(number);    
    }
    const handleClickInit = () => {
        setNumber(0);      
    }

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">0</span>
            </div>
            <div>
                <button type="button"
                        onClick={handleClickDecrement}>-(감소)</button>
                <button type="button"
                        onClick={handleClickIncrement}>+(증가)</button>
                <button type="button"
                        onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    );
}