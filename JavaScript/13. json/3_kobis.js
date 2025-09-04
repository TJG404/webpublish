//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    showResult('20250101');
})

/**
 * KMDB 영화 포스터 검색
 */
async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

async function getAPI(sdate) {
    //kobis api 연동
    let key = "1387ed83604df30a0c5d9dfdea0cba00";
    // let sdate = "20250903";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`
    url += `searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    return response.json();    
}

async function showResult(sdate) {
    let kobis = await getAPI(sdate);
    let posterList = [];
    let kobisobj = kobis.boxOfficeResult;
    let mlist = kobisobj.dailyBoxOfficeList;

    for(const movie of mlist) {
        let name = movie.movieNm;
        let date = movie.openDt.split("-");
        let poster = await searchMoviePoster(name, date);
        posterList.push(poster);
    }

    let output = `
        <div>
            <span>검색일 : </span>
            <input type="text" id="searchDate" placeholder="- 제외 예)20250101">
            <button type="button" id="btnSearch">검색</button>
        </div>
        <h3>타입 : ${kobisobj.boxofficeType}</h3>
        <h3>일자 : ${kobisobj.showRange}</h3>
        <div style="display: flex; gap: 20px">
            <img src="${posterList[0]}" id="poster"/>
            <table border=1 >
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>매출액</th>
                </tr>
                ${mlist.map((movie, index) =>             
                    `                              
                    <tr class="movieInfo">
                        <td>${movie.rank}</td>
                        <td>${movie.movieNm}</td>
                        <td>${movie.openDt}</td>
                        <td>${parseInt(movie.salesAcc).toLocaleString()}</td>
                    </tr>
                    `).join("")}
            </table>
        </div>
    `;

    document.querySelector("#content").innerHTML = output;   
    
    //검색 버튼 이벤트 추가
    document.querySelector("#btnSearch").addEventListener('click', ()=>{
        let sdate = document.querySelector("#searchDate").value.trim();
        showResult(sdate);        
    });

    const movieInfo = document.querySelector(".movieInfo");

}
