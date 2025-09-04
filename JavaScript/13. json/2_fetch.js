/**
 * fetch() : 데이터(JSON,..) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    showResult();
}) 

//data.json 데이터 가져오기
async function getData() {
    let response = await fetch("./data.json");  //1. 비동기
    return response.json(); //2. 동기
}

async function showResult() {
    let data = await getData();

    let output = `
        <h1>Fetch 함수 테스트</h1>
        <table border=1>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            ${ data.map( obj => `
                <tr>
                    <th>${obj.name}</th>
                    <th>${obj.age}</th>
                    <th>${obj.address}</th>
                </tr>
            `).join("")}
            </table>
    `;

    // console.log(output);
    
    document.querySelector("#content").innerHTML = output;
}