import React, { Component } from 'react';
import AllPages from '../allPages/allPages';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
          <h1>Welcome to Social Media App</h1>
          <AllPages />
      </div>
    );
  }
}

export default Home;
