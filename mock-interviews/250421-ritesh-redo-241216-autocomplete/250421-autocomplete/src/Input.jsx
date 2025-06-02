import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
    </>
  );
};

export default Input;
