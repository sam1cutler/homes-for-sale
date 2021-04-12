import React, { Component } from 'react';
import './HouseCard.css';


class HouseCard extends Component {

    render() {

        const { price, image_url, address, registered } = this.props.houseInfo;

        return (
            <div className='house-card-container'>
                <div className='house-card-element-image'>
                    <img src={image_url} alt='house-preview' className='house-image'/>
                </div>
                <div className='house-card-element'>
                    {price}
                </div>
                <div className='house-card-element'>
                    {address}
                </div>
                <div className='house-card-element'>
                    {registered}
                </div>
            </div>
        )

    }
}

export default HouseCard;