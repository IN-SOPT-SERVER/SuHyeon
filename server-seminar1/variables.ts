/* 예제 1 
    Typescript 기초 문법
*/
const test1: string = 'hello';
console.log(typeof test1, test1);

const test2: number = 3
console.log(typeof test2, test2);

const test3: boolean = true;
console.log(typeof test3, test3);

/* 예제 2 
    Typescript 배열
    let 변수명: T[] = 초기값;
    let 변수명: Array<T> = 초기값;

    Object, object의 차이
*/

let aaaa: number[] = [1, 2]; // 선호
let bbb: Array<string> = ['h', 'a'];

//Object -> js 객체
const foo1 = (a: Object) => { 
    console.log(a)
}

//object -> ts 객체, 원시타입이 아닌 타입만 할당 가능 (엄격)
const foo2 = (a: object) => {
    console.log(a)
}

foo1('hello');
//foo2('hello'); //error -> 'string' 형식의 인수는 'object' 형식의 매개 변수에 할당될 수 없습니다.

/* 예제 3 
    Typescript 함수 타입 표현
    void
    null, undefined
*/

const helloFun = (name: string): void => {
    console.log(`${name}아 안녕`);
}

const sumFun = (a: number, b: number): number => {
    return a + b;
}

const sumFun2 = (a: number, b: number) => a + b;

helloFun('서버');
console.log(sumFun(1, 2));

const a: null = null;
//let opps: null = 2; //null 타입만 할당 가능
let b: undefined = undefined;
//b = null; //undefined 타입만 할당 가능

/* 예제 4 
    타입 단언
    open api 값 받아올 때 무슨 타입인지 모르는 경우 확실하게 하기 위해서

    any -> 타입 검사 안함
*/

//* angle-bracket
const test11: any = '이종현';
const nameLength = (<string>test11).length;
console.log(typeof nameLength, nameLength); //number, 3

//* as
const test12: any = '강수현';
const nameLength2 = (test12 as string).length;
console.log(typeof nameLength2, nameLength2); //number, 3

/* 예제 6 
    Interface
    선택적 프로퍼티
    변수명?: T
*/

// 클라와 실제 서버 통신 시 중요함 
interface SOPT {
    name: string;
    age: number;
    isSOPT?: boolean; //? -> optional

}

//interface의 모든 프로퍼티를 채워야 함
const arr: SOPT[] = [{
    name: '권세훈',
    age: 18,
    isSOPT: true
}, {
    name: '최승빈',
    age: 67,
    isSOPT: true
}, {
    name: '강수현',
    age: 18
}];



