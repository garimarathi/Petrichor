import React from 'react';
import useFetch from './useFetch';
import BlogTemp from './BlogTemplate';


const AllBlog = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div>
            {error && <div> {error} </div> }
            {isPending && <div className="throbber">
            <span className="t one" />
            <span className="t two" />
            <span className="t three" />
            <span className="t three" />
            <span className="t one" />
            <span className="t two" />            
        </div>}  
        <div className='blogtitle'>
                <p >All Blogs </p>
            </div>
        <section id="blog">
            <div className="blog-box" >
                <h2> Plagiarism is the new art </h2>
                <span>“One who read other writers good work and <br /> picks some content for his benefit, is a fool.”</span>
                <a href="Essay-template.html">Read More</a>
            </div>
            <div className="blog-box">
                <h2> Quantum Cryptography</h2>
                <span>“Learn about Quantum Cryptography and <br /> the art of encrypting information.”</span>
                <a href="#">Read More</a>
            </div>
        </section>
        <section id="blog1">
            {blogs && <BlogTemp blogdb = {blogs.filter((blog)=>blog.ch === "blog" || blog.ch === "blogall")} title = "Blog"/>}
        </section>
    </div>
     );
}
 
export default AllBlog;