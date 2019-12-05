import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducer";
//importing all actions from file

const store = createStore(reducer);
// const { dispatch } = store;
//shorter versions of calling dispatch by using a redux functions bindActionCreators
// const { inc, dec, rnd } = bindActionCreators( actions, dispatch);


ReactDOM.render(
    <Provider store={ store }>
        < App />
    </Provider>,
    document.getElementById('root'));


