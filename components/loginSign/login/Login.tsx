import React, { useState, useContext } from 'react'
import AppContext from '../../appContext/AppContext'

type Props = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  }

type userObj = {
    username: string,
    password: string,
}

// type userArr = {
//     users: Array<userObj>
// }

type userArr = Array<userObj>

type JSONResponse = {
    data?: {
        users: Omit<userArr, 'fetched at'>
    },
    errors?: Array<{message: string}>
}

const Login = () => {
  const [ username, setUsername ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  const context = useContext(AppContext)

  const handleChange = (setter: any, text: string, state: string) => {
    setter(text);
    console.log(state);
  }

//   const fetchUser = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     console.log("hello world")
//     const res: userArr = await fetch("./fakeUser.json").then(res => res.json())
//     // const { data, errors } : JSONResponse = await res.json()
//     console.log(res)
//     const userIsExist = res.find(el => el.username === username && el.password === password)
//     if(userIsExist) {
//         context.setIsLoggedIn(true)
//         context.setUser(userIsExist)
//     }
//   }

const fetchUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()
    const body = JSON.stringify({
        username: username,
        password: password,
    })
    
    const res = await fetch(`${process.env.URL_STRING}/api/user`, {
        method: 'POST',
        body: body,
    })
    
    const data = await res.json()
    
    if(data.success) {
        context.setUser(data.user)
        context.setIsLoggedIn(true)
    }
}

  const addUserToDb = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = JSON.stringify({
        username: username,
        password: password,
        isAdd: 'true',
    })
    console.log('addUserToDb body: ', body)
    const res = await fetch(`${process.env.URL_STRING}/api/user`, {
        method: 'POST',
        body: body,
    })
    const data = await res.json()
    
  }

  return (
    <div>
        <form onSubmit={(e) => fetchUser(e)} >
            <input 
                type="text" 
                placeholder="username"
                onChange={(e) => handleChange(setUsername, e.target.value, username)} 
            />
            <input 
                type="text" 
                placeholder="password" 
                onChange={(e) => handleChange(setPassword, e.target.value, password)}
            />
            <button 
                type="submit"
            >
                Login
            </button>
        </form>
        <form onSubmit={(e) => addUserToDb(e)} >
            <input 
                type="text" 
                placeholder="username"
                onChange={(e) => handleChange(setUsername, e.target.value, username)} 
            />
            <input 
                type="text" 
                placeholder="password" 
                onChange={(e) => handleChange(setPassword, e.target.value, password)}
            />
            <button 
                type="submit"
            >
                signup
            </button>
        </form>
    </div>
  )
}

export default Login