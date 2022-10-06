/* 
랜덤 짝 배정 및 식사 메뉴 정해주기
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/
interface SoptMember {
    name: string;
    group: string;
}

interface Dinner {
    members: SoptMember[];
    shuffle: (members: SoptMember[]) => SoptMember[];
    organize: (members: SoptMember[]) => void;
}

const dinner: Dinner = {
    members: [
      {
        name: "권세훈",
        group: "ob",
      },
      {
        name: "강수현",
        group: "yb",
      },
      {
        name: "강민재",
        group: "ob",
      },
      {
        name: "현세빈",
        group: "ob",
      },
      {
        name: "김규원",
        group: "yb",
      },
      {
        name: "조하얀",
        group: "yb",
      }
    ],
    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(array) {
      this.shuffle(array);

      for (let i = 0; i < this.members.length; i = i + 2) {
        console.log(`결과 ${this.members[i].name}, ${this.members[i+1].name}`);
      }
    },
};
  
  dinner.organize(dinner.members);