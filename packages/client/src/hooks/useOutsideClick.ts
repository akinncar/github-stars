import { useEffect, RefObject } from 'react';

export function useOutsideClick(ref: RefObject<HTMLInputElement>, callback) {
  function handleClick(e: MouseEvent) {
    if (ref.current === e.target) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
