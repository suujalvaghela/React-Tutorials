import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice.js'
import authService from '../appwrite/auth.js'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      navigate("/login")
    })
  }

  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn