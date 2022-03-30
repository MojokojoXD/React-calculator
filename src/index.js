import React from 'react';
import * as DOMclients from 'react-dom/client'
import App from './App';
import './main.css'

const hook = document.getElementById('root')

const root = DOMclients.createRoot(hook);

root.render(<App/>)

