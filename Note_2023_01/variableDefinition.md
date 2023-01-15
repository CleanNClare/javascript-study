수강 : 2023.01.10 (화)

노트정리 : 2023.01.11 (수)

# 변수 정의

값과 변수로 시작해보자.

- 변수 : 기본적으로 값을 저장할 수 있는 상자이며,
- 변수 정의 : 그 상자에 이름(값)을 부여하는 것

- 값 (이름)

  - = 데이터 조각
  - (우리가 프로그래밍에서 가지오 있는 정보의) 가장 기본이 되는 단위
  - 기본적으로 가장 작은 단위
  - ex) “jonas”는 값이다.
  - 값으로 할 수 있는 매우 유용한 한 가지는 변수에 저장하는 것이다.
    이렇게 하면 계속해서 재사용할 수 있다.

    - 상자에 책을 넣고, 그 상자에 “책” 이라고 적으면 나중에 책이 들어있는 상자를 찾을 수 있다.

    ```jsx
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
    ```

    > 변수이름지정규칙
    >
    > 1. camelCase : 여러 단어가 있을 때마다 변수 이름의 첫 단어를 소문자로 쓴다.
    >
    >    그 다음 후속 단어들은 대문자로 쓰인다. → 표준 방식이다.
    >
    >    firstNamePerson
    >
    > 2. first_name_person : 밑줄을 표현하는 방법도 있다.
    > 3. 변수 이름을 지을 때 주의할 점
    >    - 변수 이름은 숫자로 시작할 수 없다 → 3years
    >    - 특수문자는 ‘\_ (언더바)’ 와 ‘$(달러기호)’만 쓸 수 있고,
    >      이 두가지 기호 외 다른 특수 기호는 사용할 수 없다.
    >    - 변수 이름을 대문자로 시작하지 말 것
    >      절대 변하지 않을 특정 사례(상수인 경우)에 대문자를 사용해야하기 때문에
    >      일반적인 변수는 소문자로 시작할 것
    >      ex) PI = 3.1415 (파이는 상수이기 때문에 모두 대문자를 써야함)
    > 4. 변수 이름은 ‘설명적’ 이어야 한다.
    >
    >    이름을 읽는 것 만으로도 어떤 값을 보유하고 있는지 이해하기 쉬워야 한다.

- 현 상태를 보고 싶을 때는 [console.log]를 사용하여 보면 됨 - 코드에서 무언가를 출력해야 할 때 !