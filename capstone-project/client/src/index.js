import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./components/context/Users";
import { IsLoginProvider } from "./components/context/IsLogin";
import { ReviewsProvider } from "./components/context/Reviews";
import { ItemsProvider } from "./components/context/Items";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IsLoginProvider>
      <UserProvider>
        <ReviewsProvider>
          <ItemsProvider>
            <App />
          </ItemsProvider>
        </ReviewsProvider>
      </UserProvider>
    </IsLoginProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
