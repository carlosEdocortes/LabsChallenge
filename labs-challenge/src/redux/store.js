import {createStore, combineReducers} from 'redux';
import currentItem from './reducers/currentItem';
import results from './reducers/results';
import suggestions from './reducers/suggestion';
const reducer =combineReducers({
    results,
    currentItem,
    suggestions
});

//creamos la store
const store = createStore(reducer);

//acceso al estado 
const state = store.getState();

export default store;


