import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.scss';

// const el = document.getElementById('app');
// ReactDOM.render(<App />, el);

const el = document.getElementById('app');
const root = createRoot(el); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
