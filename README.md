# react

css란
css는 Cascading style sheets의 약자로 스타일링을 위한 언어
cascadeing이란 계단식이라는 뜻 한 엘리먼트에 여러 스타일이 적용될 경우 스타일간 충돌을 막기 위해 계단식으로 적용하는 규칙을 갖고있음
하나의 엘리먼트에 여러개의 스타일이 적용될 수 있고 그 반대도 가능
엘리먼트에 스타일이 적용되는 규칙을 selector(선택자)라고 함 (class or Id or Tag or *(전체선택) 이중 ID의 사용은 지양)

선택자는 html엘리먼트에 직접 넣어도 되고 엘리먼트의 조합 혹은 클래스의 형태로 작성 가능
스타일은 property와 key value 형태로 이루어지며 이들은 : 으로 구분되고 각 스타일은 ;으로 구분한다

선택자중 상태선택자(::)는 해당 엘리먼트에 특수한 상호작용을 설정함 ex) hover, active, focus 등등

속성중 레이아웃과 관련된 속성은 화면에 엘리먼트가 어떻게 배치될 것인지를 결정한다
가장 중요한 속성은 Display, 모든 엘리먼트는 기본적으로 display를 가지고있다
이중 none은 존재하지만 보이지는 않는 것으로 자바스크립트로 제어할 때 많이 쓴다. 
block은 세로로 정렬 width height값을 가질 수 있다, 크기에 상관 없이 한 줄을 차지함. 대표적으로 div태그가 있음
inline은 가로로 정렬 width height값을 가질 수 없다, 컨텐츠의 크기만큼 공간을 차지함. 대표적으로 p태그가 있음
inline-block은 inline의 특성을 갖지만 width와 height등을 제어할 수 있음
flex는 컨테이너 형태로 엘리먼트를 관리
요근래 Grid의 사용이 늘어나고 있음 flex가 1차원적이라면 Grid는 2차원적으로 관리가 가능

visibility 속성은 엘리먼트의 가시성을 정의함
visibility : hidden 과 display :none의 차이는 엘리먼트의 영역이 전자는 보이고 후자는 안 보임(안 보여도 그 자리를 클릭가능)

position은 엘리먼트를 어떻게 위치시킬 지를 정의함 static은 원래 순서로 
fixed, relative는 상대적으로
absolute는 절대적으로 위치를 지정함

Font와 관련된 속성 font-size, font-weight, font-style 등등

styled-component
css문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어 주는 오픈소스 라이브러리
컴포넌트의 개념을 사용하고 있어 리액트 개발에 많이 사용됨

설치방법
npm install --save styled-components OR import해서 사용 



