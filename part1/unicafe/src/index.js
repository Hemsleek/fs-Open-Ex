import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Statistics = ({ good ,neutral ,bad }) => {
  const total = good + neutral + bad

  return(
    <div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {total}</p>
      <p>Average { total/3 } </p>
      <p>Positive {(good/total * 100) || 0}%</p>
    </div>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={()=>setGood(good +1)}>good</button>
      <button onClick={()=>setNeutral(neutral +1)}>neutral</button>
      <button onClick={()=>setBad(bad +1)}>bad</button>
      <Statistics good={good} neutral ={neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


