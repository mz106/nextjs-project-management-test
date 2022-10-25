import React, { useContext } from 'react'
import Link from 'next/link'

import AppContext from '../../appContext/AppContext'

type Props = {}

type PathObj = {
    urlPath: string,
    urlName: string
}

const navArr: Array<PathObj> = [
    {
        urlPath: "/goals",
        urlName: "goals"
    }
] 

const Navbar = () => {
  const context = useContext(AppContext)
  
    return (
        <div>
            <nav>
                <h3>nav menu</h3>
                <ul>
                {navArr.map((item, index) => (
                    <Link href={item.urlPath} key={index}>
                        <a>{item.urlName}</a>
                    </Link>
                ))}
                </ul>
            </nav>
        </div>
      )
  
}

export default Navbar
