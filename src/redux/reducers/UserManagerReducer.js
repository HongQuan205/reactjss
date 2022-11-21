import {TOKEN, USER_LOGIN} from '../../util/settings/config'
import {LOGIN_ACTION, SET_USER_INFORMATION} from '../actions/type/UserManagerType'


let user ={}
if(localStorage.getItem(USER_LOGIN))
{
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin : user,
    user_infor: {}
}

 const UserManagerReducer = (state= stateDefault,action) =>{
    switch (action.key) {
        case LOGIN_ACTION:
            const {user_infor} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(user_infor));
            localStorage.setItem(TOKEN,user_infor.accessToken);
            return {...state, userLogin: user_infor}
        case SET_USER_INFORMATION:
            state.user_infor = action.user_infor;
            return {...state}
         
        default:
            return {...state}
    }
}
export default UserManagerReducer;