import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)

  //creates a random number between 0 and length of anecdotes array inclusive
  const randNumber = () => Math.floor(Math.random() * anecdotes.length)

  //creates an array
  const points = [].fill(0,0,anecdotes.length)
  console.log(points);

  const handlePoints = () => {
    const counts = [...points]
    counts[selected] += 1
  }

  return (
    <div className="App">
      <p>{props.anecdotes[selected]}</p>
      <button onClick={handlePoints} style={{marginRight:10}}>Vote</button>
      <button onClick={() => setSelected(randNumber())}>Next Anecdotes</button>
      <p>has { points[selected] }</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);


