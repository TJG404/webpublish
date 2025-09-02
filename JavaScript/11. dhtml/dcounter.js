//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    initForm();
}) 

//화면 폼 함수
function initForm() {
    let output = `
        <h1>DCounter</h1>
        <div>
            <h2 id="number">0</h2>
            <button type="button" class="button" data-operation="increment">increment(+)</button>
            <button type="button" class="button" data-operation="decrement">decrement(-)</button>
        </div>
    `;
    document.querySelector("#content").innerHTML = output;

    //버튼 이벤트 적용
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector("#number").textContent;
            let type = button.dataset.operation;    
            if(type === 'increment') {
                if(number >= 0 ) document.querySelector("#number").textContent = ++number;
            } else {
                if(number > 0) document.querySelector("#number").textContent = --number;
            }

        });
    });

}