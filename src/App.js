import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeHeader from './HomeHeader';
import DetailHeader from './DetailHeader';

import HouseList from './HouseList';
import HouseDetail from './HouseDetail';


class App extends Component {

  renderHeader() {

    return(
      <>
        <Route 
          path='/'
          exact
          component={HomeHeader}
        />
        <Route
          path='/houses/:houseId'
          component={DetailHeader}
        />
      </>
    )
  }

  renderContent() {
    return (
      <>
        <Route 
          path='/'
          exact
          component={HouseList}
        />
        <Route 
          path='/houses/:houseId'
          component={HouseDetail}
        />
      </>
    )
  }


  render() {

    return (
      <div className='app-container'>
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    )

  }

}

export default App;