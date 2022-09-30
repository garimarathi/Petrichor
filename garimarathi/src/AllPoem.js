import React from 'react';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

//IMPORTS:

import BlogList from './PoemTemplate';
import useFetch from './useFetch';

const AllPoem = () => {
    
    const {data:poem, isPending, error,handleMark} = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            <section id="write1">
                {error && <div> {error} </div>}
                {isPending && <div className="throbber">
                    <span className="t one" />
                    <span className="t two" />
                    <span className="t three" />
                    <span className="t three" />
                    <span className="t one" />
                    <span className="t two" />
                </div>}
                <div className="pro-containers">
                    {poem && <BlogList blogsobj={poem.filter((blog) => blog.ch === "poem")} title="All Poems" handleMark={handleMark} />}
                </div>
                <div>

                </div>
            </section>
        </div>
    );
}
 
export default AllPoem;