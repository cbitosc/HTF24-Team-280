// src/SvgAnimation.js

import React, { useEffect } from 'react';

function SvgAnimation() {
  useEffect(() => {
    const poi1 = [];
    const poi2 = [];
    const poi3 = [];
    
    const ang = 7.27;
    const ang2 = 3.1;
    const ang3 = 5.19;
    let i1 = ang3;

    while (i1 <= ang3 + 3.22) {
      poi1.push((50 * Math.cos(i1)) + 123 + "," + (50 * Math.sin(i1) + 143.3));
      i1 += 0.01;
    }

    let i2 = ang;
    while (i2 <= ang + 3.22) {
      poi2.push((50 * Math.cos(i2)) + 175 + "," + (50 * Math.sin(i2) + 143.3));
      i2 += 0.01;
    }

    let i3 = ang2;
    while (i3 <= ang2 + 3.22) {
      poi3.push((50 * Math.cos(i3)) + 150 + "," + (50 * Math.sin(i3) + 186.6));
      i3 += 0.01;
    }

    const animate = (m = 0) => {
      if (m < poi1.length) {
        const p1 = poi1.slice(0, m + 1).join(" ");
        const p2 = poi2.slice(0, m + 1).join(" ");
        const p3 = poi3.slice(0, m + 1).join(" ");

        document.getElementById("c1").innerHTML = `
          <polyline points='${p1}' style='fill:none;stroke:white;stroke-width:10px'></polyline>
          <polyline points='${p2}' style='fill:none;stroke:white;stroke-width:10px'></polyline>
          <polyline points='${p3}' style='fill:none;stroke:white;stroke-width:10px'></polyline>
          
          
        `;
        m += 1;
        setTimeout(() => animate(m), 6);
      }
      else{
        document.getElementById("c3").style.display="block";
      }
    };

    animate(0)
  }, []);
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div style={{ display: 'block', textAlign: 'center' }}>
        <svg id="c1" width="300" height="300" transform="scale(2)">
          {/* SVG content here */}
        </svg>
      </div>
      <div style={{ display: 'block', textAlign: 'center',position:'relative',top:'-200px'}}>
        <svg id='c2' width="300" height="500">
          {/* SVG content here */}
        </svg>
      </div>
      <div id='c3' style={{ display: 'none', textAlign: 'center', marginTop: '-10px' ,color:'white',position:'relative',top:'-500px'}}>
        <h1 >SINFO</h1>
        <h5>Tag line</h5>
      </div>
    </div>
  
  );
}

export default SvgAnimation;
