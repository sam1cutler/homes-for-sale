import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

class HomeHeader extends Component {

    render() {

        return (
            <div className='home-header-container'>
                <h1>Homes for Sale!</h1>
                <Link
                    to='/A'
                >
                    A
                </Link>
                <Link
                    to='/B'
                >
                    B
                </Link>
                <Link
                    to='/C'
                >
                    C
                </Link>
            </div>
            
        )

    }
}

export default HomeHeader;