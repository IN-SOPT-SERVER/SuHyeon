/*
    예제1
    콜백함수로 비동기 처리
    잘 쓰지 않음 -> 콜백 지옥(이해가 힘들고 코드가 길어짐)
*/
console.log("Ready...");

setTimeout((): void => {
    console.log("Set ...");
}, 3000);

console.log("Go !");
//Ready -> Go -> 조금 뒤 Set 