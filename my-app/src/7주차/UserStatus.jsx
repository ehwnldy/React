import React, {useState,useEffect} from "react";

import React, { useEffect } from 'react';

// useEffect가 unmount로 작성될 예시
function ComponentWithCleanup() {
  useEffect(() => {
    // componentDidMount와 동일한 역할
    console.log('Component mounted');

    // componentWillUnmount와 유사한 역할
    return () => {
      console.log('Component will unmount');
      // 여기에 정리(clean-up) 코드를 작성할 수 있습니다.
      // 예를 들어, 타이머나 리소스 해제 등을 처리할 수 있습니다.
    };
  }, []); // 빈 배열을 전달하여 처음 마운트될 때만 실행

  return (
    <div>
      <h1>Component With Cleanup</h1>
      <p>This component demonstrates cleanup using useEffect.</p>
    </div>
  );
}

export default ComponentWithCleanup;

/*
useEffect 콜백 함수: useEffect 훅의 콜백 함수는 컴포넌트가 렌더링될 때마다 실행됩니다. 두 번째 매개변수로 빈 배열 []을 전달하여, 이 효과는 컴포넌트가 처음 마운트될 때 한 번만 실행되고, 언마운트될 때 정리(clean-up) 함수가 호출되도록 설정합니다.

정리 함수 반환: useEffect 내부에서 반환된 함수는 컴포넌트가 언마운트되기 전에 실행됩니다. 이 함수는 componentWillUnmount에서 수행하는 작업을 수행할 수 있습니다. 예를 들어, 타이머의 정리, 구독 해제, 리소스 해제 등을 여기에서 처리할 수 있습니다.

실행 순서: 컴포넌트가 처음 마운트될 때 console.log('Component mounted')가 출력됩니다. 그리고 컴포넌트가 언마운트되기 직전에 console.log('Component will unmount')가 출력됩니다.

useMemo의 예시 알아만 두기
const memorize = useMemo(
() => {
        return behavior(의존성 변수1,의존성 변수2)
    },
    [의존성 변수1, 의존성 변수2]
)
이와같이 의존성 배열을 넣어야한다 useMemo는 렌더링 동안 실행될 이펙트이며
useEffect용도로 사용될 지를 잘 구분해야 한다.
userCallback은 useMemo에서 배열이 아닌 함수를 반환
*/