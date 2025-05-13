import { useState, useEffect } from "react";

export function usePersistentState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;
    const parsed = JSON.parse(stored);
    if (Date.now() > parsed.expiry) {
      localStorage.removeItem(key);
      return defaultValue;
    }
    return parsed.value;
  });

  useEffect(() => {
    const expiry = Date.now() + 15 * 60 * 1000;
    localStorage.setItem(key, JSON.stringify({ value, expiry }));
  }, [key, value]);

  return [value, setValue] as const;
}
