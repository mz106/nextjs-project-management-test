import App from 'next/app'
import React, { useContext } from 'react'

import AppContext from '../components/appContext/AppContext'

import GoalItemContainer from '../components/goals/goalItemContainer/GoalItemContainer'

type Props = {}

type GoalObj = {
    goalDesc: string
  }

const Goals = () => {
    const context = useContext(AppContext)
    console.log("goals page: ", context)
//   const [ goals, setGoals ] = useState<Array<string>>([])
//   const [ goal, setGoal ] = useState<string>("")
  
//   const handleChange = (text: string) => {
//     setGoal(text)
//     console.log(goal)
    
//   }

//   const submitGoal = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setGoals([...goals, goal])
//     setGoal("")
//     console.log(goal)
//   }
  
  return (
    <div>
        <h1>Goals</h1>
        <GoalItemContainer />
    </div>
  )
}

export default Goals