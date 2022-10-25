import type { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../db/connection'

import User from '../../models/user'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req
  
  await connection()

  switch(method) {
    case 'GET':
      if(req.query.username) {
        try {
          const user = await User.findOne({username: req.query.username})
          res.status(200).json({success: true, user: user})
        } catch (error) {
          res.status(400).json({success: false})
        }
      } else {
        try {
          const users = await User.find({})
          res.status(200).json({success: true, users: users})
        } catch (error) {
          res.status(400).json({success: false})
        }
      }
      break
    case 'POST':
      const body = JSON.parse(req.body);
      if(body.isAdd) {
        try{
          const user = await User.create({username: body.username, password: body.password})
          res.status(201).json({success: true, user: user}) 
        }catch(error) {
          res.status(400).json({success: false})
        }
      } else {
        const user = await User.findOne({username: body.username})
        if(user.password === body.password) {
          res.status(201).json({success: true, user: user})
        } else {
          res.status(400).json({success: false, msg: 'password does notmatch'})
        }
      } 
      
      

  }
}

