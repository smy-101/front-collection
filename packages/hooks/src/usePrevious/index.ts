import {useEffect, useRef} from 'react';

//箭头函数泛型写法不能够在jsx语法下使用 只能使用function的写法
const usePrevious = <T>(value:T): T | undefined =>{
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export {usePrevious};