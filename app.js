import axios from "axios"

async function getData(number){
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
    console.log("users: " , user);
    console.log("posts: " , posts);
}

export default getData;