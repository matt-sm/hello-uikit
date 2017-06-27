import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="uikit-header" role="banner">
          <h1 className="uikit-header-heading">Page title</h1>
          <span className="uikit-header-subline">Service sub-title that could be a little longer</span>
        </header>
        <p>
          <strong>uikit font:</strong>
          <span class="font">The quick brown fox jumps over the lazy dog</span>
        </p>
        <button className="uikit-btn">Continue</button>
      </div>
    );
  }
}

export default App;
