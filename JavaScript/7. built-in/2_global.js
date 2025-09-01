/**
 * 최상위 객체인 Window 객체가 가지고 있는 메소드
 * - parseInt(), parseFloat(), alert(), confirm()...
 */

let a = " 123.456";
console.log(parseInt(a));
console.log(parseFloat(a));

//encodeURI, decodeURI : Global object
let uri = "http://www.naver.com?name=홍길동";
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri);

