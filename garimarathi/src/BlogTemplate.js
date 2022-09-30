import React from 'react';
import { Link } from 'react-router-dom';

const BlogTemp = ({blogdb, title}) => {
    return ( 
        <div>

        <section id="blog1"> 
            {blogdb.map((blog1) => (
                    <div className="blog-box" key={blog1.id}  style={{backgroundImage: `url(${blog1.icon})`}}>
                    <h2> {blog1.title} </h2>
                <span> {blog1.text} </span>
                <Link to= {`/blogpost/${blog1.id}`} className="icon"> Read </Link>
                </div>
            ))}
        </section>
        </div>

     );
}
export default BlogTemp;
 
