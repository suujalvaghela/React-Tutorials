import React, { useContext, useState } from 'react'
import UserContext from '../AllContext/UserContext'

function Login() {

    const[username , setUsername] = useState("")
    const[password , setPassword] = useState("")

    const{ setUser } = useContext(UserContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <div>
        <h1>CREATE YOUR PROFILE!!</h1>
        <input type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'/>

                {" "}
                
        <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'/>

        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login