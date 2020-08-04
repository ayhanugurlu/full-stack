import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
] 


const Anecdote = (props) => {
  return (
    <div>
      {props.anecdote}
    </div>
  )
}

const Display = (props) => {
  return (
    <div>
      {props.value}
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  )
}

const Botton = (props) => {
  return (
    <button onClick={props.handle}>
    {props.value}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [populer, setPopuler] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  

  const handleNextAnectodeClick = () => {
    let randomSelection = Math.floor((Math.random() * 5) + 1)
    setSelected(randomSelection)
  }

  const handleVote = () => {
    let copyPoints = [...points]
    copyPoints[selected] = copyPoints[selected] + 1
    let mostPopulerCount = Math.max(...copyPoints)
    console.log(copyPoints.indexOf(mostPopulerCount))
    setPopuler(copyPoints.indexOf(mostPopulerCount))
    setPoints(copyPoints)
  }

  return (

  
    <div>
      <Header value='Anecdote of day'/>
      <Anecdote anecdote={props.anecdotes[selected]}/>
      

      <Display value = {'has ' + points[selected] + ' votes'}/>
   

      <Botton value = 'vote' handle = {handleVote}/>
      <Botton value = 'next anectode' handle = {handleNextAnectodeClick}/>
  
      <Header value='Anecdote with most votes'/>
      <br/>
      <Anecdote anecdote={props.anecdotes[populer]}/>
    </div>
  )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)