import React from 'react';

import r1 from '../src/images/f1.png';
import r2 from '../src/images/f6.png';
import r3 from '../src/images/f5.png';
import r4 from '../src/images/f4.png';


import '../src/CSS/styles.css';
const Fav = () => {
    return ( 
    <section id="fav" className="section-p1">

    <div className = "fav-box-back">
    </div>
    <div className="fav-box">
    <img src= {r2} />
    <h6>Handbook</h6>
  </div>
  <div className="fav-box">
    <img src= {r3} />
    <h6>Collab</h6>
  </div>
  <div className="fav-box">
    <img src= {r1} />
 <h6>Resources</h6>
  </div>
</section>
     );
}
 
export default Fav;