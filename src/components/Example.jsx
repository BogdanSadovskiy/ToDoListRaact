import React, { useEffect, useState } from "react";
import "./Example.css";

const Example = () => {
  // стан компонента. Його зміна веде до перерендеру компонента
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({ name: "Tom", age: 25 });
  const [age, setAge] = useState(user.age);

  useEffect(() => { 
    console.log('Effect');
  }, [count, visible]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const changeAge = () => {
    setUser({ ...user, age: age });
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <hr />

      <button onClick={() => setVisible(!visible)}>Show</button>
      {visible && <div>Lorem, ipsum dolor.</div>}
      <hr />

      <h4>
        {user.name}, {user.age}
      </h4>
      <button onClick={changeAge}>Change age</button>
      <div>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
      </div>
      <hr />
    </div>
  );
};

export default Example;
