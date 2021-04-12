import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from './store';
import './HouseList.css';
import HouseCard from './HouseCard';


class HouseList extends Component {

    orderHousesList(houseList, attribute, direction) {
        houseList.sort()
    }

    renderHousesList(houseList) {
        return houseList.map( (activeHouse, i) => {
            //console.log(activeHouse);
            return (
                <Link
                    key={i}
                    to={`/houses/${activeHouse.id}`}
                >
                    <HouseCard
                        houseInfo={activeHouse}
                    />
                </Link>
            )
        })
    }

    render() {

        //console.log(store[0]);
        const housesList = store;

        const houseListDisplay = this.renderHousesList(housesList);

        return (
            <div className='house-list-container'>
                <div className='display-options-container'>
                    <h2>Sort by...</h2>
                    <form className='display-options-form'>
                        <div className='display-options-element'>
                            <label htmlFor='sort-attribute'>Price/registration date:</label><br/>
                            <select name='sort-attribute' id='sort-attribute'>
                                <option value='price'>Price</option>
                                <option value='registered'>Registration Date</option>
                            </select>
                        </div>
                    </form>
                </div>
                {houseListDisplay}
            </div>
        )

    }

}

export default HouseList;