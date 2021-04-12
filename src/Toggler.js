import React, { useState } from 'react';

// two pieces of state - this is redundant 
// follow DRY - do not repeat yourself.

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isHeartbroken, setIsHeartbroken] = useState(false);

    // identical to toggleIsHeartbroken - repeated logic
    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    };

    const toggleIsHeartbroken = () => {
        setIsHeartbroken(!isHeartbroken);
    }; 

    return (
       <div>
          <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
          <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "{>" : "{/>"}</h1>
       </div>
    );
}



export default Toggler;



