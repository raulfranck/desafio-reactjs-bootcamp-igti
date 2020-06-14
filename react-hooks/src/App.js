import React, { Component } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers'

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  const handleClick = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());


    setClickArray(newClickArray);
    //this.setState({ clickArray: newClickArray });
  };

  return (
    <div>
      <h1>
        React com <em>Hooks</em>
      </h1>


      <button onClick={handleClick}>Click aqui</button>

      <ul>
        {clickArray.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  )
}
