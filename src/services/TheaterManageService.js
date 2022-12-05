import { BaseService } from "./BaseService";
import { GROUPID } from "../util/settings/config";
 class TheaterManageService extends BaseService{
    getListTheaterSystem = () =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }
    
    getMovieScreenInfor = (id) =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`)
    }

    getTheaterSystemInfor = (id) =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`)
    }

    getTheaterClusterInfor = (theater_system_id) =>{
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theater_system_id}`)
    }
}

export const theaterManageService = new TheaterManageService();