/* 예제 1 
    원시 타입 알아보기
    symbol
    null / undefined
*/
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1); //true
console.log(sym1 === sym2); //false
console.log(sym3 === sym4); //false

/* 예제 2 
   Object (ex, function, Array, ..)
   속성 {key: value}
*/
const user = {
    email: "abc@naver.com",
    name: "강수현",
    favorite: ["회", "초밥"],
    introduce: function () {
        console.log(`${this.name}입니다. ${this.favorite} 좋아`);
    },
    getFavoriteFoods: function () {
        this.favorite.forEach((food) => {
            console.log(`${food} 맛 있 어`);
        });
    },
};

/* 예제 3 
    Array -> Object 타입
*/
const arr1 = ['강수현', '회', 24, true]; //배열 요소의 타입 구분 안함
const arr2 = Array('냠냠', '점심');

arr1.map((item) => console.log(`${item} 야호`));