import { useState } from 'react';
import './stopwatch.css';


function Stopwatch() {

    console.log('something');

    const [ isTicking, setIsTicking ] = useState( false );
    const [ time, setTime ] = useState( 0 );

    setInterval( () => {
        if (isTicking === true) {
            setTime( (time) => time + 1);
        }
    },  
        1000
    )
    
    function handleStart() {

        setIsTicking(true);

        

    }

    function handlePause() {

        setIsTicking(false);

    }

    const handleReset = () => {

        setTime(0);

    }

    function renderStatus(status) {
        let answer = 'Stopped.';
        if (status) {
            answer = 'Going.'
        }
        return answer;
    }

    const status = renderStatus(isTicking);

    return (
        <div className='stopwatch-container'>
            <h2>STOPWATCH</h2>
            <div className='stopwatch-element'>
                <div>
                    {time}
                </div>
                <div>
                    {status}
                </div>
            </div>
            <div className='stopwatch-element'>
                <button onClick={ () => handleStart }>
                    Start
                </button>
                <button onClick={ () => handlePause }>
                    Stop
                </button>
                <button onClick={ () => handleReset }>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Stopwatch;