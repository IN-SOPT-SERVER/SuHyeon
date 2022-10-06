// 파트원 소개 배열
var members = [
    {
        name: "김규원",
        age: 25,
        where: "안암역",
        favorite: "아메리카노",
        mbti: "ISTP"
    }, {
        name: "현세빈",
        age: 24,
        where: "청구역",
        favorite: "SOPT",
        mbti: "ENTP"
    }, {
        name: "강민재",
        age: 24,
        where: "상암",
        favorite: "스시",
        mbti: "ENFP"
    }
];
// 출력
members.map(function (member) {
    return console.log("".concat(member.name, "\uB294 ").concat(member.age, "\uC0B4\uC774\uACE0 ").concat(member.where, "\uC5D0 \uC0B4\uACE0\uC788\uACE0 ").concat(member.favorite, "\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4. mbti\uB294 ").concat(member.mbti, "\uC785\uB2C8\uB2E4."));
});
