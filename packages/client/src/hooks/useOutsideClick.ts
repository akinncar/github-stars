import { useEffect, RefObject } from 'react';

export function useOutsideClick(ref: RefObject<HTMLInputElement>, callback) {
  function handleClick(this: Document, e: MouseEvent) {
    if (ref.current && !ref.current.contains(e.target as Node)) {
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
