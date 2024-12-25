// import React from 'react'

import { useParams } from "react-router-dom"

function User() {

  const { userid } = useParams()

  return (
    <div className="flex justify-center align-bottom text-4xl font-serif pt-7 bg-violet-500 text-black h-24">
      UserId {""} { userid }
    </div>
  )
}

export default User