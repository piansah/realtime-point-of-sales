import { useRef } from "react";

export function useDebounce() {
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const debounce = (func: () => void, delay: number) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      func();
    }, delay);
  };

  return debounce;
}
