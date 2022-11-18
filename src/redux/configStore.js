import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'

//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import LoadingReducer from './reducers/LoadingReducer';
const middleWareSaga = createMiddleWareSaga()

const rootReducer = combineReducers({
    LoadingReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga))

//  call saga

middleWareSaga.run(rootSaga)
export default store