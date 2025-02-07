import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate , useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input, Button, RTE, Select } from './InputBox.js'
import appwriteService from '../appwrite/config.js'


function PostForm({ post }) {

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    const { slug } = useParams

    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || '',
        }
    })

    const submit = (data) => {
        if (post) {
            const file = appwriteService.uploadFile(data.image[0])

            if (file) {
                appwriteService.delteteFile(post.featuredImage)
            }

            const dbPost = appwriteService.updatePost(slug, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            const file = appwriteService.uploadFile(data.image[0])

            if (file) {
                data.featuredImage = file.$id

                const dbPost = appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if (dbPost) {
                    navigate(`/post/${post.$id}`)
                }
            }

        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value == 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\s\d]+/g, '-')
        }

        return ""

    }, [])


    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue("slug", slugTransform(value.title), { shouldValidate: true })
            }
        })

        return (
            subscription.unsubscribe()
        )

    }, [slugTransform, watch, setValue])


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input label='Title :'
                    placeholder='Enter Yor Title Here!!'
                    {...register("Title", {
                        required: true
                    })}
                    className="mb-4"
                />

                <Input label='slug'
                    placeholder='slug'
                    {...register("slug", {
                        required: true
                    })}
                    className="mb-4"

                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTraget.value), { shouldValidate: true })
                    }}
                />

                <RTE label='content'
                    name='content'
                    control={control}
                    defaultValue={getValues("content")}
                />

            </div>

            <div>
                <Input type='file'
                    className="w-1/3 px-2"
                    label='Featured Image: '
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", {
                        required: !post
                    })}
                />

                {post && (
                    <div>
                        <image
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select options={['active', 'inActive']}
                    label='Status'
                    className="mb-4"
                    {...register("status", {
                        required: true
                    })}
                />

                <Button type='submit' bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "update" : "submit"}
                </Button>
            </div>
        </form>

    )
}

export default PostForm