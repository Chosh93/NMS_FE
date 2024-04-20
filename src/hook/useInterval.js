import React, { useEffect, useRef } from "react";

const useInterval = ( callback, delay ) => {

const savedCallback = useRef();

// 새로운 콜백 저장
useEffect(() => {
    savedCallback.current = callback;
}, [callback]);

// 인터벌 설정
useEffect(() => {
    function tick() {
    savedCallback.current();
    }
    if (delay !== null) {
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
    }
}, [delay]);
}

export default useInterval;