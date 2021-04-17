import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css';

class HomeHeader extends Component {

    render() {

        return (
            <div className='home-header-container'>
                <h1>Homes for Sale!</h1>
                <div className='links-container'>
                    <NavLink
                        className='header-link'
                        to='/A'
                    >
                        A
                    </NavLink>
                    <NavLink
                        className='header-link'
                        to='/B'
                    >
                        B
                    </NavLink>
                    <NavLink
                        className='header-link'
                        to='/C'
                    >
                        C
                    </NavLink>
                    <NavLink
                        to='/stopwatch'
                        className='header-link'
                    >
                        Stopwatch
                    </NavLink>
                    <NavLink
                        to='/stopwatch2'
                        className='header-link'
                    >
                        Stopwatch2
                    </NavLink>
                </div>
                
            </div>
            
        )

    }
}

export default HomeHeader;