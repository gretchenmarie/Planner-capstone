import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Planner from './components/Planner';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(
    <Router>
        <Planner />
    </Router>,
     document.getElementById('root'));

registerServiceWorker();

