import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <main>
      <AutoComplete />
    </main>
  );
}

const Input = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(prevState => {
      onChange(e.target.value);
      return e.target.value;
    });
    // TO DO: Use inputValue for this

    // update inputValue state
    // get autocomplete result

    // send input metrics to
    onChange(e.target.value);
  };

  useEffect(() => {
    // TO DO: Use inputValue for this
    // do something
    //
    // set the autocomplete results to the parent state
  }, [inputValue]);

  return <input value={inputValue} onChange={handleInputChange} />;
};

const Dropdown = ({ items }) => {
  const dropdownItems = items.map((item, index) => (
    <div key={index}>{item.result}</div>
  ));
  return <div>{dropdownItems}</div>;
};

const AutoComplete = () => {
  const [dropdownItems, setDropdownItems] = useState([]);

  function fetchAutoComplete(value) {
    // fetch logic
    if (value.length) {
      return [
        { result: "San Francisco, CA", coord: 1 },
        { result: "San Jose, CA", coord: 2 },
        { result: "San Diego, CA", coord: 3 },
        { result: "Sacramento, CA", coord: 4 },
        { result: "Los Angeles, CA", coord: 5 },
        { result: "New York, NY", coord: 6 },
        { result: "Seattle, WA", coord: 7 },
        { result: "Denver, CO", coord: 8 },
      ];
    } else {
      return [];
    }
  }

  function handlePopulateDropdown(value) {
    const results = fetchAutoComplete(value);
    setDropdownItems(results);
  }

  return (
    <>
      <Input onChange={handlePopulateDropdown} />
      {/* TO DO: Only show dropdown when there is a value in input */}
      <Dropdown
        items={dropdownItems}
        onSelect={() => console.log("selected")}
      />
      <div>coord: </div>
    </>
  );
};

/*

[
  "San Francisco, CA",
  "San Jose, CA",
  "San Diego, CA",
  "Sacramento, CA",
  "Los Angeles, CA",
  "New York, NY",
  "Seattle, WA",
  "Denver, CO",
]


COMPONENTS
- AutoComplete
-- state: dropdownItems
-- functions: fetchData
- Dropdown
-- props: items
-- state: selected
- MapsInput
-- props: onChange
-- state: value

NEXT
- Select and populate input with selected
- Set coordinate

OTHER
- Call API to get matches

*/

/**
 *
 * Input component
 * - Where used
 *   - Input box for Google Maps (top left corner)
 * - User can enter
 *   - text (location)
 * - Suggestions pop up
 * - To start: implement an input box in react
 * - Web
 * - Data
 *   - Mock data
 *   - One day it will be tlaking to an API
 *   - How would we get this as autcomplete
 *
 * Parking lot
 * - Debounce
 * - Error handling
 * - Highlight on dropdown
 * - Styling
 * - Remove index as key on dropdown item
 * - Move between items on dropdown
 * - Separate out files
 * - Don't worry about what happens when they click
 * - Submit button
 *
 *
 */
