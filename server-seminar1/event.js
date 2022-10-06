/*
   Event-driven
 */
const sayHello = () => console.log("Hello");

const timer = () => {
  return setTimeout(() => {
    console.log("End !");
  }, 3000);
};

sayHello(); //hello 3초 후 End!
timer();