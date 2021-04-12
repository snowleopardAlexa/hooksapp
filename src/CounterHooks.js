import React, { useState } from 'react';

function CounterHooks() {
    const [count, setCount] = useState(0)

    return (
       <div>
           <h1>The Count is: {count}</h1>
           <button onClick={() => setCount(count + 1)}>Add</button>
       </div>
    );
}

export default CounterHooks;