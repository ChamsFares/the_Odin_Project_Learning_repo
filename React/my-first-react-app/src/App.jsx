import "./App.css";
import { useEffect, useState } from "react";
import ClassInput from "./classComponent";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  console.log("during render: ", person);

  return (
    <>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <input
        type="text"
        value={person.firstName}
        onChange={handleFirstNameChange}
        placeholder="First Name"
      />
      <input
        type="text"
        value={person.lastName}
        onChange={handleLastNameChange}
        placeholder="Last Name"
      />
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);
  return <p>{counter} seconds have passed.</p>;
}
function App() {
  return (
    <div>
      <Person></Person>
      <Clock></Clock>
      <ClassInput></ClassInput>
    </div>
  );
}

export default App;
