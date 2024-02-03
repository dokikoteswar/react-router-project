import React from "react";


import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Home</h1>
            <p>This Home Page</p>
            <button onClick={()=>navigate("/about")}> go About</button>
            <br/>
            <button onClick={()=>navigate(-1)}>Prev</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}

export default Home;