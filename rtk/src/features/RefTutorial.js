import { useState, useRef } from "react";

const RefTutorial = () => {
  const [name, setName] = useState('Ryu');
  const inputRef = useRef(null);

  const handleClick = () => {
    setName(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  }

  return (
    <>
      <h1>{name}</h1>
      <input type='text' ref={inputRef}/>
      <button
        onClick={handleClick}
      >Change Name</button>
    </>
  );
};

export default RefTutorial;
