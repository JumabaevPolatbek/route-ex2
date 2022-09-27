import { useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
import Links from "./Links";
import {IPost} from './interface'

function Posts(){
    const [posts,setPosts]=useState([]);
    const navigate=useNavigate();
    const back=()=>navigate(-1);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=9')
            .then(response => response.json())
            .then(json => setPosts(json))
    },[])
    return (
        <div className="container">
            <button onClick={back}  className="btn-back">Back</button>
            <h1>Posts</h1>
            <ul>
                {posts.map((post:IPost)=>{
                    return <Links post={post} key={post.id}/>
                })}
            </ul>
        </div>
    )
}

export default Posts;