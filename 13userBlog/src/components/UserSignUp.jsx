import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice.js'
import authService from '../appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { Input, Logo, Button } from './InputBox.js'


function UserSignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const create = async (data) => {
        setError("")

        try {
            const userData = authService.createAcount(data)
            if (userData) {
                const user = authService.getCurrentUser()
                if (user) {
                    dispatch(login(user))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <div>

                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>

                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                </p>
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label='Full Name'
                            placeholder='enter your Full name here'
                            {...register('Name', {
                                required: true,
                            })}
                        />
                        <Input
                            label='email'
                            type='email'
                            placeholder='enter your email here!!'
                            {...register('email', {
                                required: true,
                                pattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                            })}
                        />
                        <Input
                            type='password'
                            placeholder='enter your password here!!'
                            label='password'
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type='submit' className="w-full">
                            create account
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UserSignUp