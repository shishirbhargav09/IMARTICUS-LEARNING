import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from './Store/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="751104974020-emuc9adro3h8dan8i9g8bnobtumdugnu.apps.googleusercontent.com">
       
  <React.StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>

);

