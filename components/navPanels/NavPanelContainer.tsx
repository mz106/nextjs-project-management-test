import React from 'react'
import Link from 'next/link'

import GoalsNavPanel from './goaslNavPanel/GoalsNavPanel'

// type Props = {
//     url: string
// }

const NavPanelContainer = () => {
  return (
    <div>
        <GoalsNavPanel url="/goals" />
    </div>
  )
}

export default NavPanelContainer