import React, { useEffect, useState } from "react";

export default function useStateFromProps<T>(value: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState(value);

  useEffect(() => setState(value), [value]);

  return [state, setState];
}
