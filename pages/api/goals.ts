import type { NextApiRequest, NextApiResponse } from 'next'
import GoalItem from '../../components/goals/goalItem/GoalItem'
import connection from '../../db/connection'

import User from '../../models/user'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  
  await connection()
  console.log(req.body)
  switch(method) {
    
    case 'PATCH':
        const body = JSON.parse(req.body)
        console.log(body)
        if(body.addGoal === 'true') {
          try {
            // const body = JSON.parse(req.body)
            
            const user = await User.findOne({username: body.username})
            const tempArr = [...user.goals, {goal: {goalTitle: body.goalToAdd.goalTitle, goalTodoArr: []}}]
            
            const update = await User.updateOne({username: user.username}, {goals: tempArr})
            
            const updatedUser = await User.findOne({username: body.username})
            
            res.status(201).json({success: true, user: updatedUser})
          } catch (error) {
            res.status(400).json({success: false})
          }
        } else if (body.addGoalTodo === 'true') {
          console.log('1111111111111111111111111111111111111111111: ', body)
            try {
                const user = await User.findOne({username: body.username})
                const filteredGoal = await user.goals.filter((el: any) => el.goal.goalTitle === body.goalTitle)
                console.log('user: ', user.goals)
                user.goals.forEach((item: any) => {
                  console.log('kukhefwwbhlukf: ', item.goal.goalTitle, body.goalTitle)
                  
                  if(item.goal.goalTitle === body.goalTitle) {
                    item.goal.goalTodoArr.push(body.goalTodo)
                  }
                })
                console.log('user after update: ', user.goals)
        
                const updated = await User.updateOne({username: body.username}, {goals: user.goals})
                console.log(updated)
                const updatedUser = await User.findOne({username: body.username})
                res.status(201).json({success: true, user: updatedUser})
            } catch (error) {
                res.status(400).json({success: false})
            }
        }
  }

}

