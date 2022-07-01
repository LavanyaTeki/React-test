

import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = (event) => {
        event.preventDefault();
        setCount(prev => (prev, count + 1))
    }
    const resetHandler = (event) => {
        event.preventDefault();
        setCount(0)
    }
    return (
        <div className="counterContainer">
            <div className='counterWrapper'>
                <h3 className='counterClass'>COUNTER :<span className={count > 0 ? 'color':''}> {count}</span></h3>
                <button className='increment' onClick={incrementHandler} >Increment</button>
                <button className='reset' onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
}
export default Counter;