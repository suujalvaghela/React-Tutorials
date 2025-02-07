import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config.js'
import { useNavigate } from 'react-router-dom'
import { Container , PostForm } from '../components/InputBox.js'

function EditPost() {
    const { slug } = useParams()
    const [post, setPost] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }else{
            navigate("/")
        }
    }, [slug , navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost