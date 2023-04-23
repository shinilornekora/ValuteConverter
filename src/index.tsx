import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const history = {
    hist: []
}

function dispatch(state = history, action: any) {
    switch (action.type) {
        case "ADD_TO_HISTORY":
            return {...state, hist: [...state.hist, action?.payload]}
        case "ACTION__SEE":
            return {...state, hist: [...state.hist]}
        default:
            return state
    }
}


// @ts-ignore
const store = createStore(dispatch)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

