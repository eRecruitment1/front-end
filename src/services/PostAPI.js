import AxiosClient from './AxiosClient'

const PostAPI = {
    getPosts() {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts"
        return AxiosClient.get(url)
    },
    getPostById(id) {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts/"+id;
        return AxiosClient.get(url)
    },
    updatePostById(data) {
        console.log(data)
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts/"+data.id;
        return AxiosClient.put(url, data)
    },
}

export default PostAPI