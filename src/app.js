import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';

import "normalize-css/normalize.css";
import './styles/styles.scss';

import createStore from './redux/store';
import Oyster from './views/Oyster';

const store = createStore();
const HOC = () => (
    <Provider store = {store}>
        <Oyster />
    </Provider>
)

ReactDOM.render(<HOC />, document.getElementById('appRoot'));
