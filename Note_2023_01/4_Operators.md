- 연산자를 사용하면 기본적으로 값을 변환하거나 여러 값을 결합할 수 있다.
- 가치를 가진 모든 종류의 작업을 수행함.

< 연산자 우선순위 >

[Operator precedence - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

- 일반적으로 비교연산자 전에 수학 연산자가 먼저 실행된다.
- 대부분의 연산자는 왼쪽 → 오른쪽으로 실행된다. (지수 등 일부 제외)

```jsx
let x, y; // 두 개의 변수를 동시에 정의할 수 있다.
x = y = 25 - 10 - 5; 
console.log(x, y);
```

1. 이렇게하면 콘솔이 어떻게 연산자를 읽는지 보자!
2. 존재하는 모든 연산자를 본 후, 수학 연산자를 먼저 볼 것이다.
3. 그 다음 등호는 오른쪽에서 왼쪽으로 계산하기 때문에
4. *x = y = 10 → x = 10 // 결국에는 x와 y 모두 10이 된다.*