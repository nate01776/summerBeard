import React from 'react';
import Page from './Page.js'
import './App.css';

var App = React.createClass({

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    console.log(true)
  },

  render() {
    return (
      <div className="App">
        <Page
          onScroll={this.handleScroll}
        />
      </div>
    );
  }
})

export default App;
