import AxiosClient from './AxiosClient'
import LocalStorageKey from '../constant/LocalStorageKey'

const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);

const PostAPI = {
    getLatestPosts() {
        const url = "/api/post/getlastest"
        return AxiosClient.get(url)
    },
    getPosts(pageNumber) {
        const url = "/api/post/getAll?page="+pageNumber
        return AxiosClient.get(url)
    },
    getPostById(id) {
        const url = "/api/post/get/"+id;
        return AxiosClient.get(url)
    },
    updatePostById(data) {
        const url = "/api/post/update";
        return AxiosClient.put(url, data, {
            headers: {
                Authorization: accessToken,
            },
        })
    },
    createPost(data) {
        console.log(data)
        const url = "api/post/create"
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: accessToken,
            },
        })
    },
    filterPostByKeyword(keyword) {
        const url = "api/post/filter/get?keyword=" + keyword;
        return AxiosClient.get(url)
    },
    getAllPosts(){
        const url = "api/post/getAllPost";
        console.log(url)
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        })
    }
}

export default PostAPI