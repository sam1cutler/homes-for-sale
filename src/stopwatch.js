import { useRef, useState } from 'react';
import './stopwatch.css';


function Stopwatch() {

    console.log('Component loaded');

    const [ isTicking, setIsTicking ] = useState( false );
    const [ time, setTime ] = useState( 0 );
    const theTicker = useRef(null);

    function handleStart() {

        console.log('start')

        setIsTicking(true);

        theTicker.current = setInterval( () => {
            setTime( (time) => time+1 )
        }, 1000);

    }

    function handlePause() {

        setIsTicking(false);

        clearInterval(theTicker.current);

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
            <h2>STOPWATCH 1</h2>
            <div className='stopwatch-element'>
                <div>
                    {time}
                </div>
                <div>
                    {status}
                </div>
            </div>
            <div className='stopwatch-element'>
                { !isTicking
                    ? <button onClick={ handleStart }>
                        Start
                    </button>
                    : <button onClick={ handlePause }>
                        Pause
                    </button>
                }
                <button onClick={ handleReset }>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Stopwatch;