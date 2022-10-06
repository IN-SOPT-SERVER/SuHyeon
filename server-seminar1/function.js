/* 예제 1 
   function -> 객체
*/

//함수 선언식(호이스팅의 영향 받음)
function hello(name) {
    console.log(`안녕 ${name}`);
}

//함수 표현식 (호이스팅의 영향 받지 않음) ES6에서 등장
const sum = (num1, num2) => {
    const result = num1 + num2;
    console.log(result);
    return result;
};

const sum2 = (num1, num2) => num1 + num2; //로직이 1줄이면 생략가능

hello("수현");
sum(1, 2);
console.log(sum2(1, 2));

const test = "hello";
//typeof 연산자
console.log(typeof test);

