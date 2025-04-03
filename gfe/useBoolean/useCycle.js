import { useState } from "react";

export default function useCycle(...args) {
  const [index, setIndex] = useState(0);

  const cycle = () => {
    // increment index, or go back to 0
    // return value in args at index
    setIndex(prev => (prev === args.length - 1 ? 0 : prev + 1));
  };

  return [args[index], cycle];
}
