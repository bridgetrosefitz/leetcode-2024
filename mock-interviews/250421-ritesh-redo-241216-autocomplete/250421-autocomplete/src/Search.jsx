import Input from "./Input";
import Dropdown from "./Dropdown";
import { useState, useEffect, useCallback } from "react";
import { makeServerCall } from "./search.utils";

const Search = () => {
  const [dropdownValues, setDropdownValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [error, setError] = useState(null);

  const handleInputChange = useCallback(async () => {
    const data = await makeServerCall(inputValue);
    console.log("data", data);
    setDropdownValues(data);
  }, [inputValue]);

  useEffect(() => {
    handleInputChange();
  }, [inputValue, handleInputChange]);

  return (
    <>
      <Input
        value={inputValue}
        setInputValue={setInputValue}
        onInputChange={handleInputChange}
      />
      <Dropdown values={dropdownValues} />
    </>
  );
};

export default Search;
