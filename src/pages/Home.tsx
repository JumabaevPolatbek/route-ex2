import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="container">
            <h1>The Elements</h1>
            <ul className="list" >
                    <li ><Link to={"/posts"}>Posts</Link></li>
                    <li><Link to={"/comments"}>Comments</Link></li>
            </ul>
        </div>
    )
}

export default Home;