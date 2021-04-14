import { useEffect, useState } from 'react';
import './funcCompA.css';

function FuncCompA() {

    const [ movieList, setMovieList ] = useState( [] );

    function renderMovieList(movieList) {
        return movieList.map( activeMovie => {

            const { Title, Year, imdbID } = activeMovie;

            return (
                <div 
                    key={imdbID}
                    className='movie-box'
                >
                    <p>
                        {Title}
                    </p>
                    <p>
                        {Year}
                    </p>
                </div>
            )
        }
            
        )
    }

    useEffect( () => {

        fetch(`https://jsonmock.hackerrank.com/api/movies`)
            .then( response => response.json() )
            .then( jsonData => {
                setMovieList(jsonData.data)
            })

    }, [] )

    const renderedMovieList = renderMovieList(movieList);

    return (

        <div className='func-comp-container'>
            {renderedMovieList}
        </div>

    )

}

export default FuncCompA;