import {useEffect, useRef} from 'react';

type Callback = () => void;

const useInterval = (callback:Callback, delay:number) => {
  const savedCallback = useRef<Callback>(()=>{console.log('useInterval');});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = () => savedCallback.current();

    if (delay !== null) {
      const id = setTimeout(handler, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export {useInterval};

