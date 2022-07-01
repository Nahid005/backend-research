/**
 * using multipule api and solve this problem 
 */

/**
 * 1. find user by user name 
 * 2. find posts by user id 
 * 3. find latest post 
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find user name of the last commented user 
 */

/**
 * this is a api end point 
 * 
 * finding user 
 * 1. /users?username = [username]
 * 
 * finding posts by user
 * 2. /posts?user_id = [user_id]
 * 
 * finding comments by user
 * 3. /comments?post_id = [post_id]
 * 
 * finding last commented user
 * 4. /user?username = [username]
 */


// const getData = (url) => Promise.resolve();

// getData(`/users?username = [username]`)
// .then((user)=> {
//     return getData(`/posts?user_id = ${user.id}`);
// })
// .then( (post)=> {
//     return getData(`/comments?post_id = ${post.id}`);
// })
// .then( (comment) => {
//     return getData(`/user?username = ${comment.id}`);
// })
// .catch( (e) => {
//     console.log( ` This is server error ${e}`);
// })


const axios = require('axios').default;

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';


async function getUser (username) {
    try{
        const {data: users} = await axios.get(`${usersUrl}?username = ${username} `);
        const {data: posts} = await axios.get(`${postsUrl}?users[0] = ${users[0].id}`)
        const {data: comments} = await axios.get(`${commentsUrl}?posts[1] = ${posts[1].id}`)
    } catch (e) {
        console.log(e)
    }
}

getUser('Bret')