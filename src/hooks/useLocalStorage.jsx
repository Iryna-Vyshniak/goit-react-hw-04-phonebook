import { useState, useEffect } from 'react';

export default function useLocaStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    JSON.parse(window.localStorage(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
