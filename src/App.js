import React, { Component } from 'react';
import Layout from './HOC/Layout';
import BurgerBuiler from './Containers/BurgerBuilder';

class App extends Component {

  render() {
    return (
      <Layout>
        <BurgerBuiler/>
      </Layout>
    );
  }
}

export default App;
