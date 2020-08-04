import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ parts }) => {



  const calculateSum = (parts)  => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
      <b>total of {sum} exercises</b>
    ) 
  }


  return (
    <div>  
    {calculateSum(parts)}
    </div>
  )
}

export default Course