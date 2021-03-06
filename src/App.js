import React from 'react';
import { Provider } from 'react-redux'
import Posts from './components/Posts'
import PostForms from './components/PostForm'
import { store } from './store'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PostForms/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
