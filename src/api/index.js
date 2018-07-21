
import axios from 'axios'

const root = 'https://jsonplaceholder.typicode.com/'
const fetchPosts = () => axios.get(`${root}posts`)
const fetchPostById = (id) => axios.get(`${root}posts/${id}`)
const fetchUsers = () => axios.get(`${root}users`)
export {
    fetchPosts,
    fetchPostById,
    fetchUsers
}
