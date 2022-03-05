import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Pages/Video-call/Context.js';
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Pages/Chat/ChatProvider.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     
    <ContextProvider>
    <App />
    </ContextProvider>,
    
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
