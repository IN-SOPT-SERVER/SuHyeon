/*
    예제 1
    프로미스(Promise)
    상태: Pending/Fullfiled/Rejected
*/

const condition: boolean = false;

//* 최초 시행 시점
//resolve -> 성공적 이행, reject -> 실패 시
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("우와 Promise다!"); //resolvedData를 보냄
    } else {
        reject(new Error("비동기 처리 도중 실패!"));
    }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
    .then((resolvedData): void => console.log(resolvedData))
    .catch((error): void => console.log(error));
