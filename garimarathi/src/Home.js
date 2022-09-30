import React from 'react';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

//IMPORTS:
import Hero from './Hero';
import Fav from './Fav';
import Divider2 from './Divider2';
import Myblog from './Blog';

import BlogList from './PoemTemplate';
import useFetch from './useFetch';

const Home = () => {
    
    const {data:poem, isPending, error,handleMark} = useFetch('http://localhost:8000/blogs');

    return (  
        <><Hero /><Fav />
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
                    {poem && <BlogList blogsobj={poem.filter((blog) => blog.ch === "poem")} title="Featured" handleMark={handleMark} />}

                </div>
                <div>

                </div>
            </section>
        </div>
        <Divider2 />
        <Myblog />
        </>
    );
}
 
export default Home;