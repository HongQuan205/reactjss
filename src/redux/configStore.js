import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'

//middleware saga
import createMiddleWareSaga from 'redux-saga';
import LoadingReducer from './reducers/LoadingReducer';
import UserManageReducer from './reducers/UserManagerReducer'
const middleWareSaga = createMiddleWareSaga()

const rootReducer = combineReducers({
    LoadingReducer,
    UserManageReducer,
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga))

export default store