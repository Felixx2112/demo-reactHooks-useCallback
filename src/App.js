import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [users, setUsers] = useState([]);

  // useCallback cung giong nhu useMemo() se giup cho chung ta ghi nho function
  // ma khong tao lai mot function moi khi maf App component dc re-render
  const getData = useCallback((type) => {
    return fetch(`http://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <>
      <p>Data: </p>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
}

export default App;
