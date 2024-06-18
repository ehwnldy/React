// 여러개의 컴포넌트를 렌더링 할 때 일일히 하나씩 렌더링 하는것은
// 불편함과 재정의의 어려움을 가진다 이때 map함수를 사용한다면 이를 더
// 나은 방법으로 할 수 있다.

// 이 코드는 넘버즈 배열에 있는 값을 처음부터 각각 지정한 함수의 행동만큼 하고 반환한다.
const doubled = numbers.map( (number) => number * 2)

// 아래 코드를 실행 시 li안에 ul태그로 감싸진 1~5까지의 숫자가 출력됨
const numbers = [1,2,3,4,5]
const listItem = numbers.map( (number) => <li>{number}</li>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ul>{listItem}</ul>)

//위 코드를 분해해서 본 경우
function NumberList(props){
    const { numbers } = props

    const listItem = numbers.map( (number) =>
        <li>{number}</li>
    )

    return (
        <ul>{listItem}</ul>
    )
}

//하지만 이렇게 코드를 실행하면 리스트에는 무조건 키가 있어야 한다고 경고를 함.
//키는 리스트의 아이템을 구분하기 위한 고유한 문자열임 이는 고유해야하며 그 범위는 한정되어있다.
//다른 범위에서는 같은 문자열로 쓰여도 상관 없다.
//리액트는 이 값을 정해주지 않으면 인덱스를 기본 키로 가진다.

// 아래는 동일한 코드에 키값을 배열 그자신의 문자열로 가진 것이다.
const numbers = [1,2,3,4,5]
const listItem = numbers.map( (number) => <li key={number.toString()}>{number}</li>)

// 아래는 키값으로 id를 사용한 방식
const todoItem = todos.map( (todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
)

//아래는 index를 사용한 방식 이는 명시적으로 키값을 설정하지 않을 시 기본 값이다

const todoItem = todos.map ( (todo,index) =>
    <li key={index}>
        {todo.text}
    </li>
)