import { userManageService } from "../../services/UserManagerService"
import {history} from '../../App'
import {LOGIN_ACTION} from './types/UserManagerType'


export const LoginAction = (user_login) =>{

    return async (dispatch) =>{
        try {
            const result = await userManageService.login(user_login)
            if(result.data.statusCode === 200)
            {
                dispatch({
                    type: LOGIN_ACTION,
                    user_infor: result.data.content
                })

                // chuyển hướng đăng nhập về trang trước đó
                history.goBack();
            }
            console.log('result', result)
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}