import {applyMiddleware, combineReducers, createStore} from 'redux';
import LoadingReducer from './reducers/LoadingReducer';
import UserManageReducer from './reducers/UserManagerReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    LoadingReducer,
    UserManageReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store