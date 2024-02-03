import React from "react";
import { useNavigate } from "react-router-dom";

const Contact =({count})=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Contact  {count}</h1>
            <p>This Contact Page</p>
            <button onClick={()=>navigate("/about")}> go About</button>
            <button onClick={()=>navigate(-1)}>Prev</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}

export default Contact;