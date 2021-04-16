import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

class HomeHeader extends Component {

    render() {

        return (
            <div className='home-header-container'>
                <h1>Homes for Sale!</h1>
                <div className='links-container'>
                    <Link
                        className='header-link'
                        to='/A'
                    >
                        A
                    </Link>
                    <Link
                        className='header-link'
                        to='/B'
                    >
                        B
                    </Link>
                    <Link
                        className='header-link'
                        to='/C'
                    >
                        C
                    </Link>
                    <Link
                        to='/stopwatch'
                        className='header-link'
                    >
                        Stopwatch
                    </Link>
                </div>
                
            </div>
            
        )

    }
}

export default HomeHeader;