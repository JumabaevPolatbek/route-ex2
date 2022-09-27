import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Links from './Links'
import {IPost} from "./interface";
function Comments(){
    const btn=useNavigate();
    const back=()=>btn(-1);
    const [comments,setComments]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=9')
            .then(response => response.json())
            .then(json => setComments(json))
    },[])
    return (
        <>
            <button onClick={back} className="btn-back">Back</button>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment:IPost)=>{
                    return <Links post={comment} key={comment.id}/>
                })}
            </ul>
        </>
    )
}

export default Comments;