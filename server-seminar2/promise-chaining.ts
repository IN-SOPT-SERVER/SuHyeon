//* 아침에 힘겹게 일어나는 여러분을 표현한 함수
const me = (callback: () => void, time: number) => {
    setTimeout(callback, time); //callback함수가 time 후에 실행
};

//* 기상
const wakeUp = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 기상!");
            resolve("기상");
        }, 1000);
    })
};

//* 화장실 감
//이전에 일어난 상태를 받음 -> now
const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 화장실로 이동함");
            resolve(`${now} -> 화장실로 이동함`);
        }, 1000);
    })
};

//* 칫솔과 치약을 준비함
const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 칫솔과 치약을 준비함");
            resolve(`${now} -> 칫솔과 치약을 준비함`);
        }, 1000);
    })
};

//* 양치함
const startChikaChika = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 양치함");
            resolve(`${now} -> 양치함`);
        }, 1000);
    })
};

//* 나 자신에게 칭찬함
const goodJob = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 나 자신에게 칭찬중");
            resolve(`${now} -> 칭찬중`);
        }, 1000);
    })
};

wakeUp()
    .then((now) => goBathRoom(now)) //resolvedData == now
    .then((now) => ready(now))
    .then((now) => startChikaChika(now))
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`));

/*
결과 //timeout에서 설정해 준 time 1초가 지나고 로그가 찍힘
[현재] 기상!
[현재] 화장실로 이동함
[현재] 칫솔과 치약을 준비함
[현재] 양치함
[현재] 나 자신에게 칭찬중

기상 -> 화장실로 이동함 -> 칫솔과 치약을 준비함 -> 양치함 -> 칭찬중
마지막 then문에서 넘어온 now string이 찍힘
*/
