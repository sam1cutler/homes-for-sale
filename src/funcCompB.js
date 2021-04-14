import { useEffect, useState } from 'react';


function FuncCompB(props) {

    const [movieList, setMovieList] = useState( [] );

    function renderMovieList(inputMovieList) {

        return inputMovieList.map( activeMovie => {

            const { Title, Year, imdbID } = activeMovie;

            return (
                <div 
                    key={imdbID}
                    className='movie-box'
                >
                    <div>
                        {Title}
                    </div>
                    <div>
                        {Year}
                    </div>
                </div>
            )

        })

    }

    useEffect( () => {

        fetch('https://jsonmock.hackerrank.com/api/movies')
            .then( response => response.json() )
            .then( movieData => {
                setMovieList(
                    movieData.data
                )
            })

    }, [] )

    const renderedMovieList = renderMovieList(movieList);

    return (

        <div className='func-comp-container'>
            {renderedMovieList}
        </div>

    )

}

export default FuncCompB;