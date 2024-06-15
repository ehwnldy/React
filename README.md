# 배상현 202230214

## 2024년 3월 13일: GitHub 사용법 소개
- **GitHub 사용법**: GitHub는 분산 버전 관리 시스템으로, 소스 코드를 저장하고 공유하는 데 사용됩니다. 이를 통해 여러 개발자가 동시에 작업할 수 있으며, 버전 관리를 통해 프로젝트의 변경 이력을 관리할 수 있습니다.
  - **기본 개념**:
    - **Repository(저장소)**: 프로젝트의 파일과 변경 이력을 저장하는 곳.
    - **Commit(커밋)**: 변경 내용을 저장하는 단위.
    - **Branch(브랜치)**: 독립적으로 작업을 진행할 수 있는 분기.
    - **Pull Request(풀 리퀘스트)**: 변경 내용을 병합하기 위해 요청하는 과정.
  - **VSCode와 GitHub 연동**: VSCode의 내장 Git 기능을 사용하여 GitHub와 연동하여 쉽게 커밋하고, 브랜치를 관리하며, 풀 리퀘스트를 생성할 수 있습니다.

## 2024년 3월 20일: 리액트 소개
- **리액트(React)**: 페이스북에서 개발한 사용자 인터페이스 라이브러리로, 가상 DOM을 활용하여 성능을 최적화하고, 컴포넌트 기반 아키텍처를 제공하여 개발 생산성을 높입니다.
  - **장점**:
    - **가상 DOM**: 실제 DOM과 비교하여 변경 사항만 업데이트하여 성능 향상.
    - **컴포넌트 재사용성**: 독립적인 컴포넌트 단위로 개발하여 유지보수성과 재사용성 향상.
    - **풍부한 생태계**: 다양한 서드파티 라이브러리와 도구 제공.
  - **단점**:
    - **학습 곡선**: 초기 학습이 어려울 수 있음.
    - **빠른 변화**: 라이브러리와 도구의 빠른 업데이트로 최신 트렌드를 따라가기 어려울 수 있음.

## 2024년 3월 27일: JSX와 엘리먼트
- **JSX(JavaScript XML)**: React에서 UI를 구성하기 위한 JavaScript 확장 문법입니다.
  - **역할**: React 엘리먼트를 생성하는 데 사용.
  - **장점**: 가독성이 뛰어나고 동적인 UI 작성이 가능하며, JavaScript와 XML의 장점을 결합.
  - **사용법**: JavaScript 표현식을 중괄호 `{}`로 감싸서 JSX 내부에 삽입할 수 있습니다.
    ```jsx
    const element = <h1>Hello, world!</h1>;
    const name = 'John';
    const greeting = <h1>Hello, {name}</h1>;
    ```
- **엘리먼트(Element)**: React 애플리케이션의 구성 요소로, UI를 표현하는 최소 단위.
  - **정의**: React 엘리먼트는 가상 DOM에 해당하는 객체로서, 화면에 렌더링되기 위한 정보를 포함.
  - **특징**: 불변성을 가지며, 변경 사항을 가상 DOM을 통해 효율적으로 업데이트.
  - **생성**: `React.createElement` 함수를 사용하거나 JSX 문법을 사용하여 생성.
    ```jsx
    const element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');
    ```
  - **렌더링**: `ReactDOM.render()` 함수를 사용하여 실제 DOM에 렌더링.
    ```jsx
    ReactDOM.render(element, document.getElementById('root'));
    ```

## 2024년 4월 3일: 컴포넌트 이해
- **Props**: React 컴포넌트 간에 데이터를 전달하는 메커니즘으로, 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용.
  - **특징**:
    - **읽기 전용(immutable)**: 자식 컴포넌트에서 Props를 변경할 수 없습니다.
    - **데이터 전달**: 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달.
  - **사용법**:
    ```jsx
    // 부모 컴포넌트에서 자식 컴포넌트에 props 전달
    <MyComponent name="John" age={30} />

    // 자식 컴포넌트에서 props 사용
    const MyComponent = (props) => {
      return <div>{props.name}, Age: {props.age}</div>;
    }
    ```
- **컴포넌트 종류**:
  - **함수 컴포넌트**: 함수 형태로 정의되는 컴포넌트로, props를 인자로 받아 JSX를 반환.
  - **클래스 컴포넌트**: 클래스 형태로 정의되는 컴포넌트로, React.Component 클래스를 상속받아 render() 메서드를 구현.
- **컴포넌트 합성**: 여러 개의 작은 컴포넌트를 조합하여 복잡한 UI를 만드는 기술.
  - **예제**:
    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    function App() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
    ```
- **컴포넌트 추출**: 컴포넌트가 너무 복잡해지거나 재사용성을 높이기 위해 부분적으로 컴포넌트를 추출하는 기술.
  - **예제**:
    ```jsx
    function Comment(props) {
      return (
        <div className="Comment">
          <UserInfo user={props.author} />
          <div className="Comment-text">
            {props.text}
          </div>
          <div className="Comment-date">
            {formatDate(props.date)}
          </div>
        </div>
      );
    }

    function UserInfo(props) {
      return (
        <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
      );
    }
    ```

## 2024년 4월 17일: State와 생명 주기
- **State**: React 컴포넌트의 상태를 관리하는 개념으로, 컴포넌트의 동적인 변화를 처리하는 데 사용.
  - **특징**: State는 컴포넌트의 내부에 저장되며, `setState()` 함수를 통해 업데이트.
  - **예제**:
    ```jsx
    class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
    ```
- **생명 주기(Lifecycle)**: React 컴포넌트는 생성부터 소멸까지의 여러 단계를 가집니다.
  - **생명 주기 메서드**:
    - `componentDidMount()`: 컴포넌트가 처음으로 렌더링된 후 호출.
    - `componentDidUpdate(prevProps, prevState)`: 컴포넌트가 업데이트된 후 호출.
    - `componentWillUnmount()`: 컴포넌트가 DOM에서 제거되기 전에 호출.
- **훅(Hook)**: React v16.8에서 도입된 기능으로, 함수형 컴포넌트에서 상태 관리와 생명 주기 기능을 사용할 수 있게 해줍니다.
  - **주요 훅**:
    - `useState`: 상태 관리를 위한 훅.
    - `useEffect`: 생명 주기와 관련된 작업을 수행하는 훅.
  - **예제**:
    ```jsx
    import React, { useState, useEffect } from 'react';

    function Clock() {
      const [date, setDate] = useState(new Date());

      useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);
      }, []);

      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    ```

## 2024년 5월 8일: DOM 이벤트와 조건부 렌더링
- **DOM 이벤트**: React에서 이벤트 이름은 Camel case로 작성되며, 이벤트 핸들러는 함수로 전달.
  - **예제**:
    ```jsx
    <button onClick={activate}>Activate</button>
    ```
- **조건부 렌더링**: 조건에 따라 다른 UI를 렌더링.
  - **Truthy와 Falsy 값**:
    - **Truthy**: `true`, `{}`, `[]`, `42`, `"0"`, `"false"`
    - **Falsy**: `0`, `-0`, `0n`, `''`, `""`, `` ` ``, `null`, `undefined`, `NaN`
  - **예제**:
    ```jsx
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
      }
      return <h1>Please sign up.</h1>;
    }
    ```
- **이벤트 핸들러**: 이벤트 발생 시 처리할 함수를 지정.
  - **사용법**:
    ```jsx
    function handleClick() {
      console.log('Button clicked');
    }

    <button onClick={handleClick}>Click me</button>
    ```
- **훅의 규칙**:
  - **첫 번째 규칙**: 훅은 최상위 레벨에서만 호출해야 합니다. 루프, 조건문, 중첩된 함수 내에서 훅을 호출하면 안 됩니다.
  - **두 번째 규칙**: 훅은 함수형 컴포넌트와 커스텀 훅 내에서만 호출해야 합니다. 일반 JavaScript 함수에서 호출하면 안 됩니다.

## 2024년 5월 22일: 리스트와 키
- **리스트**: 배열과 유사한 데이터 구조로, 여러 개의 항목을 관리할 때 사용됩니다.
  - **리스트 렌더링**: JavaScript의 `map()` 함수를 사용하여 각 항목을 컴포넌트로 변환.
    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );

    <ul>{listItems}</ul>
    ```
- **키(Key)**: 리스트에서 각 아이템을 구분하는 고유한 값으로, React가 어떤 항목이 변경, 추가 또는 제거되었는지 식별하는 데 사용.
  - **키의 중요성**: 효율적인 업데이트를 위해 각 리스트 아이템에 고유한 키를 부여해야 합니다.
  - **사용 예제**:
    ```jsx
    const todoItems = todos.map((todo) =>
      <li key={todo.id}>{todo.text}</li>
    );
    ```
- **제어 컴포넌트(Control Component)**: 사용자의 입력 값을 제어할 수 있는 컴포넌트로, 폼 엘리먼트의 값이 컴포넌트의 state에 의해 제어됩니다.
  - **예제**:
    ```jsx
    class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    ```

## 2024년 5월 29일: textarea와 File input 태그
- **textarea 태그**: HTML에서는 자식 요소로 텍스트를 포함하지만, 리액트에서는 value 속성을 통해 값을 제어합니다.
  - **예제**:
    ```jsx
    class EssayForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    ```
- **File input 태그**: 파일 입력 태그는 읽기 전용으로, 비제어 컴포넌트로 다뤄집니다. 이는 state로 제어되지 않기 때문에 ref를 사용하여 파일 입력을 관리합니다.
  - **예제**:
    ```jsx
    class FileInput extends React.Component {
      constructor(props) {
        super(props);
        this.fileInput = React.createRef();
      }

      handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected file - ${this.fileInput.current.files[0].name}`);
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Upload file:
              <input type="file" ref={this.fileInput} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
    ```

## 2024년 6월 5일: 리액트 합성과 컨텍스트 API
- **Shared State(공유 상태)**: 동일한 부모 컴포넌트의 state를 자식 컴포넌트들이 공유하는 방식으로, 공통된 데이터를 여러 컴포넌트가 사용할 때 유용합니다.
- **합성(Composition)**: 여러 개의 컴포넌트를 조합하여 새로운 컴포넌트를 만드는 기술로, 다양한 컴포넌트를 조합하여 복잡한 UI를 생성할 수 있습니다.
  - **Containment(포함)**: 자식 컴포넌트를 `props.children`을 통해 부모 컴포넌트에 포함시키는 방식.
    - **예제**:
      ```jsx
      function FancyBorder(props) {
        return (
          <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
          </div>
        );
      }

      function WelcomeDialog() {
        return (
          <FancyBorder color="blue">
            <h1 className="Dialog-title">
              Welcome
            </h1>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
          </FancyBorder>
        );
      }
      ```
- **컨텍스트 API(Context API)**: 리액트 컴포넌트 트리 전체에 데이터를 전달할 수 있는 방식으로, 중간 컴포넌트를 거치지 않고도 필요한 데이터를 전달할 수 있습니다.
  - **컨텍스트 생성**: `React.createContext`를 사용하여 컨텍스트 생성.
  - **컨텍스트 제공**: `Context.Provider`를 사용하여 하위 컴포넌트에 데이터를 전달.
  - **컨텍스트 소비**: `Context.Consumer`를 사용하여 함수형 컴포넌트에서 컨텍스트 구독.
  - **예제**:
    ```jsx
    const ThemeContext = React.createContext('light');

    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar() {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }

    function ThemedButton() {
      return (
        <ThemeContext.Consumer>
          {theme => <button className={theme}>Themed Button</button>}
        </ThemeContext.Consumer>
      );
    }
    ```

## 2024년 6월 11일: 리액트 컨텍스트와 특수화
- **컨텍스트(Context)**: 여러 컴포넌트가 특정 데이터를 필요로 할 때 유용하게 사용할 수 있는 기능으로, 전역적인 데이터나 설정값을 전달할 때 주로 사용됩니다.
  - **고려할 점**: 모든 경우에 컨텍스트를 사용하는 것은 바람직하지 않으며, 필요한 경우에만 사용해야 합니다. 단순히 props를 통해 데이터를 전달할 수 있는 경우에는 props를 사용하는 것이 좋습니다.
- **Specialization(특수화)**: 범용적인 컴포넌트를 구체화하여 특정한 용도로 사용하는 방식.
  - **Containment와 Specialization**:
    - **Containment**: `props.children`을 사용하여 자식 요소를 포함하는 방식.
    - **Specialization**: 특정한 props를 통해 컴포넌트를 구체화하여 사용.
  - **예제**:
    ```jsx
    function Dialog(props) {
      return (
        <div className="Dialog">
          <h1 className="Dialog-title">{props.title}</h1>
          <p className="Dialog-message">{props.message}</p>
          {props.children}
        </div>
      );
    }

    function SignUpDialog() {
      return (
        <Dialog title="Mars Exploration Program" message="How should we refer to you?">
          <input />
          <button>Sign Me Up!</button>
        </Dialog>
      );
    }
    ```
- **테마링**: 컨텍스트를 사용하여 테마를 적용하는 예제.
  - **예제**:
    ```jsx
    const ThemeContext = React.createContext('light');

    class ThemedButton extends React.Component {
      static contextType = ThemeContext;
      render() {
        return <button className={this.context}>Themed Button</button>;
      }
    }

    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <ThemedButton />
        </ThemeContext.Provider>
      );
    }
    ```
