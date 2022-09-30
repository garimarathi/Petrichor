import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faBookmark} />
const heart = <FontAwesomeIcon icon={faHeart} />

function Nav() {
  return (
<section id="header">
  <a href="/" className="tname"><p>Garima Rathi</p></a>
  <div>
    <ul id="navbar">
      {/* <a href="#" id="close"><i className="fa fa-times" /> </a> */}
      <li><Link className="active" to="/">Home</Link></li>
      <li><Link className="effect" to="/Learn">Learn</Link></li>
      <li><Link className="effect" to="/AllPoem">Explore</Link></li>
      <li><Link className="effect" to="/AllBlog">Blog</Link></li>
      <li>
        <a className href="bookmark.html">
          {element}
        </a>
      </li></ul>
  </div>
  <div id="mobile"> 
     {heart}
  </div> 
  
</section>

  );
}
export default Nav;
