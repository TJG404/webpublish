/**
 * fetch() : 데이터(JSON,..) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    getJson();
}) 

async function getJson() {
    let response = await fetch("./data.json");
    return response.json();
}

async function showResult() {
    //1. getJson() 결과 가져오기
    let data = await getJson(); 
    
    //2. output 변수에 html 코드 저장
    //3. innerHTML로 output 출력
}


