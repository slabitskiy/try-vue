
import axios from 'axios'

const root = 'https://jsonplaceholder.typicode.com/'
const fetchPosts = () => axios.get(`${root}posts`)
const fetchUsers = () => axios.get(`${root}users`)
export {
    fetchPosts,
    fetchUsers
}
