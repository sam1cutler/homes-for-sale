import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from './store';
import './HouseList.css';
import HouseCard from './HouseCard';


class HouseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortingAttribute: 'price',
            sortingDirection: 'ascending'
        };
        this.handleSortAttributeChange = this.handleSortAttributeChange.bind(this);
        this.handleSortDirectionChange = this.handleSortDirectionChange.bind(this);
    }

    handleSortAttributeChange(event) {
        this.setState( {
            sortingAttribute: event.target.value
        } )
    }

    handleSortDirectionChange(event) {
        this.setState( {
            sortingDirection: event.target.value
        } )
    }


    orderHousesListByPrice(houseList, direction) {
        houseList.sort(function(a, b) {
            const c = parseFloat(a.price.replace('$','').replace(',',''));
            const d = parseFloat(b.price.replace('$','').replace(',',''));
            let outcome;
            if ( direction === 'ascending' ) {
                outcome = c-d;
            } else if ( direction === 'descending' ) {
                outcome = d-c;
            }
            return outcome;
        })
    }

    orderHousesListByRegistration(houseList, direction) {
        houseList.sort(function(a, b) {
            const c = new Date(a.registered);
            const d = new Date(b.registered);
            let outcome;
            if ( direction === 'ascending' ) {
                outcome = c-d;
            } else if ( direction === 'descending' ) {
                outcome = d-c;
            }
            return outcome;
        }) 
    }

    renderHousesList(houseList) {
        return houseList.map( (activeHouse, i) => {
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

        const housesList = store;

        if (this.state.sortingAttribute === 'price') {
            this.orderHousesListByPrice(housesList, this.state.sortingDirection);
        } else if (this.state.sortingAttribute === 'registered') {
            this.orderHousesListByRegistration(housesList, this.state.sortingDirection);
        }
    
        const houseListDisplay = this.renderHousesList(housesList);

        return (
            <div className='house-list-container'>
                <div className='display-options-container'>
                    <h2>Sort by...</h2>
                    <form className='display-options-form'>
                        <div className='display-options-element'>
                            <label htmlFor='attribute'>Price/registration date:</label><br/>
                            <select name='attribute' id='attribute' onChange={this.handleSortAttributeChange}>
                                <option value='price'>Price</option>
                                <option value='registered'>Registration Date</option>
                            </select>
                        </div>
                        <div className='display-options-element'>
                            <label htmlFor='sort-direction'>Ascending/descending</label><br/>
                            <select name='sort-direction' id='sort-direction' onChange={this.handleSortDirectionChange}>
                                <option value='ascending'>Ascending</option>
                                <option value='descending'>Descending</option>
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