import { useState, useRef } from 'react';

const Stopwatch2 = () => {

    const [ isTicking, setIsTicking ] = useState(false);
    const [ timeCount, setTimeCount ] = useState(0);
    const theTicker = useRef(null); // using useRef because want a grabbable object - but don't want changes to the object to trigger a re-render


    const handleStart = () => {
        setIsTicking(true);
        theTicker.current = setInterval( () => {
            setTimeCount( (time) => time + 1 );
        }, 1000)
    }

    const handlePause = () => {
        setIsTicking(false);
        clearInterval(theTicker.current);
    }

    const handleReset = () => {
        setTimeCount(0);
    }


    const renderStartPause = () => {

        return ( isTicking
            ?
                <button onClick={handlePause}>
                    Pause
                </button>
            :
                <button onClick={handleStart}>
                    Start
                </button>
        )

    }

    // const renderTheTime = (timeCount) => {
    //     const hours = Math.floor(timeCount / 3600);
    //     const minutes = timeCount - 60*
    // }

    const startPause = renderStartPause();

    return (

        <div className='stopwatch-container'>
            <h2>Stopwatch #2</h2>
            <div className='stopwatch-element'>
                {timeCount}
            </div>
            <div className='stopwatch-element'>
                {startPause}
                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )

}

export default Stopwatch2;