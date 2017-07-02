"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';
import {getTabs, postTabs, deleteTabs, updateTabs}  from './actions/tabsActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import TabsLists from './components/pages/tabsList';


render(
    <Provider store={store}>
        <TabsLists />
    </Provider>,
    document.getElementById('react_example')
);