import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const BlogList  = ({blogsobj, title, handleMark}) => {
    
    const bkmark = <FontAwesomeIcon icon={faBookmark} />
    const heart = <FontAwesomeIcon icon={faHeart} />

    return (  
    <div className="bloggg">
       <h1>{title}</h1> 
     <div className="pro-containers">
        {blogsobj.map((blog) => (
            <div className="pro" key = {blog.id}>
              <img src= {blog.icon} alt="" />
              <div className="des">
                <span>{blog.title}</span><br />
                <h5>Type: {blog.type} </h5>
                <button className='btn_blog' onClick={() => handleMark(blog.id)}>
                <a className="icon iconehover">
                  {bkmark} 
                </a></button> 
                <Link to= {`/poems/${blog.id}`} className="icon"> Read </Link>
                <a className="icon iconhover">
                  {heart}
                </a>
              </div>
            </div>            

        ))}     
</div>
</div>
    );
}
 
export default BlogList ;