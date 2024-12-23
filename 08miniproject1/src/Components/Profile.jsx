import React, { useContext } from 'react'
import UserContext from '../AllContext/UserContext'

function Profile() {
 
    const {user} = useContext(UserContext)

    if(!user) return <h3>Username Require</h3>

    return <h3>welcome {user.username}</h3>

}

export default Profile