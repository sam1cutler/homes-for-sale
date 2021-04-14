import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeHeader from './HomeHeader';
import DetailHeader from './DetailHeader';

import HouseList from './HouseList';
import HouseDetail from './HouseDetail';

import FuncCompA from './funcCompA';
import FuncCompB from './funcCompB';
import FuncCompC from './funcCompC';


class App extends Component {

  renderHeader() {

    return (
      <>
        {['/','/A','/B','/C'].map( path => (
          <Route
            exact
            key={path} 
            path={path}
            component={HomeHeader}
          />
      ))}
        
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
        <Route 
          path='/A'
          component={FuncCompA}
        />
        <Route 
          path='/B'
          component={FuncCompB}
        />
        <Route path='/C'>
          <FuncCompC 
            title='oh, it worked alright'
          />
        </Route>
        
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