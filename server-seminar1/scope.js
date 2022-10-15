
/* 예제 1 
    var: function scope 
    let,const: blockscope
*/
// if (true) {//block scope
//     var test = "var !"; //var: function scope
//     console.log(test);
// }
// console.log(test); // var 살아있음

// if(true) {//block scope
//     let test2 = "let !"; //let: block scope
//     console.log(test2);
// }
// console.log(test2); //-> error(test2 is not defined)

//var 변수 쓰면 함수 죽어도 살아있기 때문에 중요하게 사용해야 함


/* 예제 2 
    function scope를 벗어난 곳에서 var를 호출한 경우
*/
// function fun() { //function scope
//     var test = 'var';
//     if (true) {
//         console.log(test);
//     }
//     console.log(test);
// }

// fun()
// console.log(test); // function scope 밖이므로 error