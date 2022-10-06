// 파트원 소개 배열 -> 변수명 복수형으로 지정
const members: Member[] = [
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

// 파트원 소개 인터페이스 만들기
interface Member {
    name: string;
    age: number;
    where: string;
    favorite: string;
    mbti: string;
}

// 출력
members.map((member) =>
    console.log(`${member.name}는 ${member.age}살이고 ${member.where}에 살고있고 ${member.favorite}을 좋아합니다. mbti는 ${member.mbti}입니다.`)
)