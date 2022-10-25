import React from 'react'
import Navbar from './navbar/Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <h1>Todo Test</h1>
      <Navbar />
    </div>
  )
}

export default Header