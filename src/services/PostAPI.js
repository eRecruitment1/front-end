import React from 'react'
import AxiosClient from './AxiosClient'

const PostAPI = {
    getPosts() {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts"
        return AxiosClient.get(url)
    }
}

export default PostAPI