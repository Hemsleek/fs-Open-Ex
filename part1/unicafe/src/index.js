import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Button = ({ option, setOption, text }) =>
  <button onClick={() => setOption(option + 1)}> {text} </button>

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text='good' option={good} setOption={setGood} />
      <Button text='Neutral' option={neutral} setOption={setNeutral} />
      <Button text='bad' option={bad} setOption={setBad} />
      <h2>Statistics</h2>
      {
        (good || neutral || bad) ? <table>
          <tbody>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='All' value={total} />
            <Statistic text='Average' value={total / 3} />
            <Statistic text='Positive' value={(good / total * 100) + '%'} />
          </tbody>
        </table> :
          <p>No Feedback Given</p>
      }

    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


