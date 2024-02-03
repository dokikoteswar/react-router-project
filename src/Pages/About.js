import React from "react";

import { useNavigate } from "react-router-dom";

const About =()=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>About</h1>
           <button onClick={()=>navigate("/blog")}> go Blog</button>
            <p>This About Page</p>
            <button onClick={()=>navigate(-1)}>Prev</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}

export default About;