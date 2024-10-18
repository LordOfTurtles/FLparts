//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './global.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)



//createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)
