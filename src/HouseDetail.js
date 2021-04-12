import React, { Component } from 'react';
import './HouseDetail.css';
import store from './store';


class HouseDetail extends Component {

    render() {

        const { price, image_url, realtor, address, about, registered } = store[0];

        const { first, last, company, email, phone } = realtor;
        const realtorImage = realtor.image_url;
        
        // console.log(realtorImage);
        // console.log(first);

        return (
            <div className='house-details-container'>
                <div className='house-detail-upper'>
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
                <div className='house-detail-about'>
                    {about}
                </div>
                <div className='house-realtor-info'>
                    <div className='house-card-element-image'>
                        <img src={realtorImage} alt='realtor' className='house-image'/>
                    </div>
                    <div className='house-detail-element'>
                        {first}{' '}{last}<br />
                        {company}
                    </div>
                    <div className='house-detail-element'>
                        {email}<br />
                        {phone}
                    </div>
                </div>
                
            </div>
        )

    }
}

export default HouseDetail;