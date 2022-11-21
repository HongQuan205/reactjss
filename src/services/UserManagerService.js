import { BaseService } from "./BaseService";

class UserManagerService extends BaseService{

    login = (userLogin) =>{
        return this.post("/api/QuanLyNguoiDung/DangNhap", userLogin)
    }

    getUserInfor = () =>{
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
}

export const userManageService= new UserManagerService();