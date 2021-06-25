import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CurrencyReducer from "./Reducers/CurrencyReducer";
import ThunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    CurrencyReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkMiddleware)))
window.store = store
export default store