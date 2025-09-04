

for(let i=1; i<6; i++) {
    console.log(`i --> ${i}`);
    // console.log(`j --> ${j}`);  //에러 발생
    
    for(let j=2; j<5; j++) {
        console.log(`j --> ${j}`);
        console.log(`i --> ${i}`);        
    }
}