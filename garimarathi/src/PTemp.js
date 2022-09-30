import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

import '../src/CSS/P-template.css';


const PTemp = () => {
    
    const { id } = useParams();
    const {data:poem, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    
    return ( 

        <div className="poem">
                
                {isPending && <div className="throbber">
                    <span className="t one" />
                    <span className="t two" />
                    <span className="t three" />
                    <span className="t three" />
                    <span className="t one" />
                    <span className="t two" /> </div>}

        { error && <div> {error} </div> }
        { poem && ( <div className="poem" >
        <img src= {poem.icon} alt="" />

            <section id="heading1">
              <div className="heading-sub">
                <h2>
                    {poem.title} 
                </h2>
                <h3>
                  {poem.type}
                </h3>
              </div>
              <p>
               {poem.content}
              </p>
              <h4 className="poemtemp" > <b>Author's Note:</b><br></br> 
                {poem.authors_note}</h4>
              <h4 className="poemtemp"> <b>About the Poetry Type:</b><br></br> 
                {poem.about}</h4>
            </section>
        </div> )} 
        </div>


     );
}
 
export default PTemp;

