/*

// Variable name conventions


let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let PI = 3.1415;

let myFirstJob = "Programer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);
*/

/*
//Data Types

//boolean을 변수에 저장할 수도 있다.
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

//변수 재할당 (값을 재할당 할때는 let을 사용하지 않는다.)
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);
//undefined
let year;
console.log(year);
console.log(typeof yaer);
//undefined -> 값이 있는것으로 타입 재설정
year = 1991;
console.log(typeof yaer);
*/

/*
//변수를 선언하는 3가지 방법
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; <- X
// const job; <- X

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


//수학 연산자 Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//할당 연산자 Assignment operators
let x = 10 + 5; // 15
x += 10; // (+=이 의미하는 바 : x = x + 10) // x = x + 10 => 25
x *= 4; // (*=이 의미하는 바 : x = x * 4) // x = x * 4 => 100
x++; // x = x + 1 => 101
x--; // x = x - 1 => 100
x--; // x = x - 1 => 99
console.log(x);

//비교 연산자 Comparison operators
//조나스가 사라보다 나이가 많습니까?
console.log(ageJonas > ageSarah); // 비교연산자 : >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // 비교연산자보다 '-' 가 먼저 실행된다.


//연산자 우선순위 Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5); //일반적으로 연산자는 왼쪽에서 오른쪽으로 읽힌다.

let x, y; // 두 개의 변수를 동시에 정의할 수 있다.
x = y = 25 - 10 - 5; // x = y = 10, x = 10 // 결국에는 x와 y 모두 10이 된다.
console.log(x, y);

// 평균 연령을 계산해보자.
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//strings and template literals

const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// ESXi 템플릿 리터럴을 사용하면 보다 일반적인 방법으로 문자열을 작성할 수 있습니다.
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// 여러줄 문자열 만들기

// 옛날방식 _ \n\을 이용한 여러문자열 만들기
console.log(
  "String with \n\
multiple \n\
lines"
);

// 요즘방식 _ ` (백틱) 을 사용하여 리턴 키를 누르는것
console.log(`String
multiple
lines`);
