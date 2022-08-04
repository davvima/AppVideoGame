import React from 'react';
import ReactDOM from 'react-dom/client';

//Libraries
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

//Components
import App from 'App';

//Variables
import store from 'redux/store';

//Styles
import "index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);