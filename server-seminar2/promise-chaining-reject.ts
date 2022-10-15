/*
    예제 2
    promise의 then에서 throw error를 한 경우
 */
//throw -> 하면 then으로 안가고 error로 들어감!
Promise.resolve(true)
    .then((response) => {
        throw new Error("비동기 처리 중 에러 발생!");
    })
    .then((response) => {
        console.log(response);
        return Promise.resolve(true);
    })
    .catch((error) => {
        console.log("catch!");
        console.log(error.message);
    });