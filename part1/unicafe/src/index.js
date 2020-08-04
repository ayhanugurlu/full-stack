import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
    )
}

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;


  const calculatePositive = () => {
    if((good + neutral + bad) === 0)
      return 0;
    return good*100/(good+neutral+bad);  
}

  const calculateAverage = () => {
      if((good + neutral + bad) === 0)
        return 0;
      return (good-bad)/ (good+neutral+bad);  
  }


  let all = good + neutral +bad;
  if(all > 0 ){
    return (
   
        <table>
          <tbody>
          <Statistic text='good' value={good}/>
          <Statistic text='neutral' value={neutral}/>
          <Statistic text='bad' value={bad}/>
          <Statistic text='all' value={all}/>
          <Statistic text='average' value={calculateAverage()}/>
          <Statistic text='positive' value={calculatePositive() + '%'}/>
          </tbody>
        </table>


      )
  }
  return (
    <div>
       No feedback given
    </div>
    )


}


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
    {props.text}
  </button>
    )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
      setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }




  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <br/>
      <Button text='good' onClick={handleGood}/>
      <Button text='neutral' onClick={handleNeutral}/>
      <Button text='bad' onClick={handleBad}/>
      <h1>give statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)