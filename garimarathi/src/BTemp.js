import React from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

import '../src/CSS/E-template.css';



const BTemp = () => {
    
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    
    return ( 
        <div>
            {isPending && <div className="throbber">
                <span className="t one" />
                <span className="t two" />
                <span className="t three" />
                <span className="t three" />
                <span className="t one" />
                <span className="t two" /> </div>}

        { error && <div> {error} </div> }
        {
            blog && (
                <div className="blogtemp" >
                    <section id = "heading">
                    <h2>   
                        {blog.title}   
                    </h2>
                    <h3>
                        {blog.text}
                    </h3>
                       <div className="contents">
                       {blog.body} <br></br><br></br>
                       {blog.para1} <br></br><br></br>
                       {blog.para2} <br></br><br></br>
                       {blog.para3} <br></br><br></br>
                       {blog.para4} <br></br><br></br>
                       {blog.para5}<br></br><br></br>
                       {blog.para6}
                       </div>
                        

        </section>
 </div>
            )
        }
        </div>
     );
}
 
export default BTemp;