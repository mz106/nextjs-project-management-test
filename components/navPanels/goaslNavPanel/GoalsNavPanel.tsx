import React from 'react'
import Link from 'next/link'

type Props = {
    url: string
}

const GoalsNavPanel = ({ url }: Props) => {
  return (
    <div>
        <Link href={url}>
            <a><h2>Goals</h2></a>
        </Link>
    </div>
  )
}

export default GoalsNavPanel