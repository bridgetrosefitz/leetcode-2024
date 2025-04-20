const Controls = ({ onChangePhoto }) => {
  return (
    <>
      <button onClick={() => onChangePhoto("first")}>{"|<"}</button>
      <button onClick={() => onChangePhoto("decrement")}>{"<"}</button>
      <button onClick={() => onChangePhoto("increment")}>{">"}</button>
      <button onClick={() => onChangePhoto("last")}>{">|"}</button>
    </>
  );
};

export default Controls;
