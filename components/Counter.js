import React, { useState } from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [msg, setMessage] = useState("counter: 0");

  // msgStyle = {
  //   fontSize: "16pt",
  //   backgroundColor: "#eef",
  //   padding: "5px"
  // }

  const doAction = (e) => {
    const num = counter + 1;
    setCounter(num);
    setMessage('counter: ' + num);
  }

  return (
    <p onClick={doAction}>
      {msg}
    </p>
  )
};

export default Counter;