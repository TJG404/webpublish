## !! 크로스 브라우징(Cross Browsing) 
- 작성한 UI(HTML) 페이지를 모든 브라우저에서 동일한 모습으로 출력 

## 1. HTML(HyperText Markup Language)
- 팀 버너스 개발, W3C에서 HTML 버전 등 관리
- 태그로 구성되며, 시작태그<>, 종료태그</>로 구성
  또는 시작과 종료가 하나의 태그로 구성된 경우도 있음
  예) <h1>내용</h1>, <br/> 등...
- 태그 구성요소
  <시작태그  속성(attribute)= "속성내용" 등..> 내용 </종료태그>
- 모든 컨텐츠는 태그로 작성되어야 함!!  --> CSS, JS에서 적용 가능하도록..

## 2. 웹표준
- HTML5 + CSS3 + JQuery  ::: 2010년도 중반
- 틀, 구조 : HTML
- 모양, 스타일 : CSS
- 동작, 이벤트 : JavaScript, JQuery

## 3. 블록 레벨
- 태그 생성 시 블록 레벨이 정의되어 생성됨
- 브라우저 전체 크기(width 기준, 100%) : block
- heading tag(h1~h6), div, p 태그 등..
- 블록 레벨은 다른 태그를 포함할 수 있다. 일부 태그(div, p ..)
  예) <div>
        <h1>~</h1> 
        ...
      </div>
- 다른 태그를 포함하는 태그는 레이아웃 설정 시 사용됨
  : header, main, section, footer, div 등...
- 다른 레벨 형식으로 수정 시  display 속성을 이용함
  예) <h1 style="display:inline;">인라인 레벨로 변경</h1>
- style 속성으로 사이즈를 변경할 수 있다!!

## 4. 인라인 레벨 - 한문자로 인식
- 태그 생성 시 인라인 레벨로 정의됨
- 컨텐츠 내용 크기만 적용 : inline
- span, button, a, ...
- 인라인 레벨 태그는 인라인 레벨 태그만 일부 포함 가능
  예) <span> <a href="">다음</a> </span>
- 다른 레벨 형식으로 수정 시  display 속성을 이용함
  예) <span style="display:block;">블록 레벨로 변경</span>
- style 속성으로 사이즈, 여백를 변경할 수 없다!! => 블록, 인라인 블록으로 변경 

## 5. 인라인-블록 레벨
- 크기는 인라인 적용되며, 사이즈 조정은 블록처럼 사용되는 태그
- img, video  태그 등이 있음
- 다른 레벨 형식으로 수정 시  display 속성을 이용함

## 6. 제목 - heading tag 
- 출력되는 글씨 크기 순서는 h6< ~~ <h1
- block level
- <h1> ~ </h1>
- <h2> ~ </h2>
- <h3> ~ </h3>
- <h4> ~ </h4>
- <h5> ~ </h5>
- <h6> ~ </h6>

## 7.  문단 - paragraph : <p>~</p>
- 문단을 구성할 때 사용하는 태그
- 인라인 레벨 태그 포함 가능, div, heading.. 태그는 포함 불가능!!

## 8. 목록 표시 : <ul>~</ul>, <ol>~</ol>
- 목록을 표시하는 태그
- 순서가 필요없이 리스트 표현 : <ul>~</ul>
- 순서가 필요한 경우 : <ol>~</ol>
- 메뉴리스트, 이미지 리스트 등 생성시 목록 태그를 주로 사용함

## 9. 표 형식 : <table> ~ </table>
- 표형식으로 데이터를 표시하는 태그
- 테이블 태그에 포함되는 한 행은 <tr>~</tr>
- tr 태그안에 실제 데이터를 포함하는 <th>, <td>
- 디폴트로 border는 표시되지 않음


## 10. 링크 표현<Anchor> : <a> ~<a>
- 형식 : <a href="절대/상대 경로" target="">컨텐츠</a> 
- 다른 사이트나 페이지로 링크를 통해 이동하는 경우 
- target 속성은 _self(기본), _blank(새창), _parent(부모 프레임) 등..
- id 속성을 이용하여 한 페이지에서 자유롭게 이동, <a href="#아이디">~</a>

## 11. 이미지
- 이미지를 표시하는 태그
- 필수 속성은 src, alt(이미지 주소가 다른경우 출력되는 문자), width, height
- 인라인 블록 레벨을 가짐

## 12. 폼 태그
- 사용자가 데이터를 입력하는 태그
- input, button, radio, checkbox...
- 사용자가 입력한 데이터를 백엔드로 전송하는 방법을 반드시 숙지!!!!

### font awesome 사이트 무료 아이콘 CDN
 ```
 <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
```


