import React, { useState, useContext } from 'react'

import GoalItem from '../goalItem/GoalItem'
import AppContext from '../../appContext/AppContext'

type Props = {}



const GoalItemContainer = (props: Props) => {

    // const [ goals, setGoals ] = useState<Array<string>>([])
    const [ goalText, setGoalText ] = useState<string>('')

    const context = useContext(AppContext)
    

    const handleChange = (text: string) => {
        setGoalText(text)
        
      }
    
      const submitGoal = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const goalToPost = {
          goalTitle: goalText
        }
       
        console.log("username: ", context.user.username)
        const res = await fetch(`${process.env.URL_STRING}/api/goals`, {
          method: 'PATCH',
          body: JSON.stringify({
            username: context.user.username,
            goalToAdd: goalToPost,
            addGoal: 'true'
          })
        })
        console.log(res)
        const data = await res.json()
        console.log(data)
        setGoalText('')
        context.setUser(data.user)
        
      }

  type Item = {
    goal: {
      goalTilte: string,
      goalTodoArr: string[]
    }
  }
  

  return (
    <div>
        <form onSubmit={(e) => submitGoal(e)}>
            <textarea placeholder='type goal here' onChange={(e) => handleChange(e.target.value)} value={goalText}/>
            <button type="submit">add goal</button>
        </form>
        <div>
            {context.user.goals && context.user.goals.map((item: any, index: number) => (
                <GoalItem item={item} key={index.toString()} />
            ))}
        </div>
    </div>
  )
}

export default GoalItemContainer
