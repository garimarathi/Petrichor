import React from 'react';

import pic from '../src/images/Diary-bro1.png';


const Hero = () => {
    return ( 
        
<section id="hero">
    <img className="heroimg" src= {pic} />
        <div className="set">
        <h3 className="font f1">
        Hi, I am Garima Rathi.
        </h3>
        <h4 className="font">
        Welcome to my online home!<br /> I am an Engineer by profession and a poet by heart.
        </h4>
        <h5 className="font">
        Check out my poetry stash: <a href="http://commaful.com/play/aabhar/" target="”_blank”"><button>Poiein</button> </a> 
        </h5>
    </div>
</section>
     );
}
 
export default Hero;