import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './app';

if (module && module.hot) {
  module.hot.accept();
}

const HotApp = hot(App);

ReactDOM.render(<HotApp />, document.querySelector('#app'));
