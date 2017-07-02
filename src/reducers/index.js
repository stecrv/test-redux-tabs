"use strict"

import {combineReducers} from 'redux';

import {tabsReducers} from './tabsReducers';

export default combineReducers({
    tabs: tabsReducers
})