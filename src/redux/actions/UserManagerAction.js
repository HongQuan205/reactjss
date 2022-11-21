import { userManageService } from "../../services/UserManagerService"
import {history} from '../../App'


export const LoginAction = (user_login) =>{

    return async (dispatch) =>{
        try {
            const result = await userManageService.login(user_login)

            if(result.data.code === 200)
            {
                dispatch({
                    type: LoginAction,
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