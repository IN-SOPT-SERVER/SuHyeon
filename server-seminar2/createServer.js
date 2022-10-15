const http = require("http"); //http 모듈 가져옴

const port = 3000; //주소

http.createServer((req, res) => {
    res.write("<h1>IN SOPT SERVER!</h1>");
    res.end("<p>awesome</p>");
})
.listen(port, () => {
    console.log(`${port}번 포트에서 대기중!`);
});

//node createServer.js