import React from 'react';
import { render } from 'react-dom';

import App from './App';

import 'normalize.css';
import '../css/style.css';

const wrapper = document.getElementById('app');
render(<App />, wrapper);