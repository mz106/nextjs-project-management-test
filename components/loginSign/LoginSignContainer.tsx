import React from 'react'

import Login from './login/Login'

type Props = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginSignContainer = () => {
  return (
    <div>
        <Login />
    </div>
  )
}

export default LoginSignContainer