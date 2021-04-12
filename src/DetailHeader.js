import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailHeader.css';

class DetailHeader extends Component {

    render() {

        return (
            <div className='detail-header-container'>
                <h2>A specific home!</h2>
                <Link
                    to='/'
                    className='back-link'
                >
                    Go back
                </Link>
            </div>
            
        )

    }
}

export default DetailHeader;