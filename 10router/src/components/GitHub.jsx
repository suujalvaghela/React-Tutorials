// import React from 'react'

import { useLoaderData } from "react-router-dom"

// import { useEffect, useState } from "react"

function GitHub() {

    const  data  = useLoaderData()

    // const [data, setdata] = useState({})

    // useEffect(() => {
    //     fetch("https://api.github.com/users/suujalvaghela")
    //         .then(res => res.json())
    //         .then(data => setdata(data))
    // }, [])

    return (

        <div className="flex flex-col  justify-center  gap-96 text-4xl font-serif bg-gray-500 text-black h-24">
            <div className="flex justify-center ">Github Followers : {data.followers}
            </div>
        </div>
    )
}

export default GitHub

export const gitLoader = async () => {
    const res = await fetch("https://api.github.com/users/suujalvaghela")
    return res.json()
}