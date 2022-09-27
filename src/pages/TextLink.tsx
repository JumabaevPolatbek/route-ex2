import { useNavigate ,useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import { IPost} from "./interface";

function TextLink(props:any){
    const history=useNavigate()
    const back=()=>history(-1);
    const {id} = useParams();
    const [post,setPost]=useState<IPost>();
    useEffect(()=>{
        if(props.form==='posts'){
            fetch(`https://jsonplaceholder.typicode.com/${props.form}/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
        }
        else {
            fetch(`https://jsonplaceholder.typicode.com/${props.form}/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
        }
    },[id,props])

    /// render post or comments
    if(props.form==='posts'){
        return(
            <div className={props.form}>
                    <button onClick={back}>Back</button>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
            </div>
        )
    } else{
        return(
            <div className="props.form">
                    <button onClick={back}>Back</button>
                    <h1>{post?.name}</h1>
                    <p>{post?.body}</p>
            </div>
        )
    }
    
}
export default TextLink;