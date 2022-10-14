import AxiosClient from './AxiosClient'
import LocalStorageKey from '../constant/LocalStorageKey'

const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);

const PostAPI = {
    getLatestPosts() {
        // const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts"
        const url = "/api/post/getlastest"
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        })
    },
    getPosts() {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts"
        // const url = "/api/post/getAll"
        return AxiosClient.get(url)
    },
    getPostById(id) {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts/"+id;
        return AxiosClient.get(url)
    },
    updatePostById(data) {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts/"+data.id;
        return AxiosClient.put(url, data)
    },
    createPost(data) {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Posts";
        return AxiosClient.post(url, data)
    }
}

export default PostAPI