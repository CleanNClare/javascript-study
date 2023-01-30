//Coding Challenges #1

//const markWeight = 78;
//const markHeight = 1.69;
//const johnWeight = 92;
//const johnHeight = 1.95;

//data 2 값으로 mark와 john의 데이터를 변경해보자.
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHightBMI = markBMI > johnBMI;
console.log(markHightBMI);
