import { React } from "react";

const Vlog = ({posts, title, handleDelete}) => {

    return(
    <div className="vvlog">
        <h2>{title}</h2>
            {posts.map((post) =>(
                <div className="post-summary" key={posts.id}>
                    <h2>{post.title}</h2>
                        <p> written by {post.author} </p>
                        <p>{post.author} says {post.body}</p>
                    <button onClick = {() => handleDelete(post.id)}> Delete post </button>
                </div>
            ))}
    </div>); 
}

export default Vlog;