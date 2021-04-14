import { useEffect, useState } from 'react';


function FuncCompC(props) {

    const [movieList, setMovieList] = useState( [] );

    useEffect( () => {

        fetch('https://jsonmock.hackerrank.com/api/movies')
            .then( response => response.json() )
            .then( movieInfo => {
                setMovieList(movieInfo.data)
            })

    }, [])

    const renderedMovieList = movieList.map( activeMovie => {

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


    return (
        <div className='func-comp-container'>
            <h2>{props.title}</h2>
            {renderedMovieList}
        </div>
    )

}

export default FuncCompC;