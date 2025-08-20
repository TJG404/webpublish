/**
 * 구구단 출력 : 2 ~ 9단
 *  2*1=2   3*1=3   ...
    ...
    2*9=18  3*9=27  ...
 */
for(let i=1; i<10; i++) {
    let rows = '';
    for(let j=2; j<10; j++) {
        rows += `${j}*${i}=${i*j}\t`;
    }
    console.log(rows);    
}

/**
* 별 찍기 - 오른쪽으로 하나씩 증가, 5행까지 출력
*/
for(let i=1; i<=5; i++) {
    let output = '';
    for(let j=1; j<=i; j++) {
        output += `*`;
    }
    console.log(output);
}

/**
 * 초록사과 찍기, 3행 줄만 빨간사과 출력
 */
for(let i=1; i<=5; i++) {
    let output = '';
    for(let j=1; j<=i; j++) {
        if(i === 3) {
            output += `🍎`;
        } else {
            output += `🍏`;
        }
    }
    console.log(output);
}