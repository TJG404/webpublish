
export function cartItemsCheck(prevItems, cartItem) {
    //존재여부 체크
    const existItem = prevItems.find((item) => 
                            item.pid === cartItem.pid && item.size === cartItem.size);

    if(existItem) { //존재하면 map으로 순회하면서 pid, size가 동일한 item에 qty +1 증가
        return prevItems.map((item) =>  //map은 새로운 배열 반환
        item.pid === cartItem.pid && item.size === cartItem.size
            ? { ...item, qty: item.qty + 1 }
            : item
        );
    } else {         
        return [...prevItems, { ...cartItem }];  //존재하지 않으면 새로운 item 추가
    }
}