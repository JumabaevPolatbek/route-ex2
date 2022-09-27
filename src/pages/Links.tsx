import { Link } from "react-router-dom";
import {IPost} from "./interface";
interface PropsPost{
    post:IPost
}
function Links(props:PropsPost){
    if(props.post.userId){
        return(
            <>
             <li>
                 <Link to={`${props.post.id}`}>
                     {props.post.title}
                     </Link>
                 </li>
             </>)
    }
    else{
        return(
            <>
             <li>
                 <Link to={`${props.post.id}`}>
                     {props.post.name}
                     </Link>
                 </li>
             </>)
    }
}
export default Links;