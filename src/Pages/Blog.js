import React from "react";
import { useNavigate } from "react-router-dom";

const Blog =({count, setCount})=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Blog</h1>
            <p>This Blog Page</p>
            <br />
            <button onClick={()=>navigate("/home")}> go to Home</button>
            <h2>Counter {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <br/>
            <button onClick={()=>navigate(-1)}>Prev</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}

export default Blog;