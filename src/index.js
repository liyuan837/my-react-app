import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.js';
import { createStore,applyMiddleware,compose  } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga.js';
import createLogger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware(rootSaga)

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware,createLogger)
)
sagaMiddleware.run(rootSaga)
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
