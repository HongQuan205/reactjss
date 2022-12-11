import {applyMiddleware, combineReducers, createStore} from 'redux';
import LoadingReducer from './reducers/LoadingReducer';
import UserManageReducer from './reducers/UserManagerReducer'
import  {FilmManagerReducer}  from './reducers/FilmManagerReducer';
import {TheaterManagerReducer} from './reducers/TheaterManagerReducer'
import {CarouselReducer} from './reducers/CarouselReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    LoadingReducer,
    UserManageReducer,
    FilmManagerReducer,
    TheaterManagerReducer,
    CarouselReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store