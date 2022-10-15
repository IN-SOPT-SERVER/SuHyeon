/*
    async-await
    async - 암묵적으로 Promise를 반환
    await - resolve, reject 같은 Promise 객체를 기다림, async가 정의된 내부에서만 사용 가능
    프로미스는 직관적으로 이해하기 어려움.. -> 개선
*/

let asyncFunc1 = (something: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved ${something} from func1 ...`);
        }, 1000);
    });
};

let asyncFunc2 = (something: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved ${something} from func2 ...`);
        }, 1500);
    });
};

const promiseMain = (): void => {
    asyncFunc1("test")
        .then((resolvedData: string) => {
            console.log(resolvedData);
            return asyncFunc2("testttt");
        })
        .then((resolvedData: string) => {
            console.log(resolvedData);
        });
}

const main = async (): Promise<void> => {
    let result = await asyncFunc1("wow!");
    console.log(result);
    result = await asyncFunc2("holy moly");
    console.log(result);
}

promiseMain()
main()