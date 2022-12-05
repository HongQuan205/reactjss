import {BaseService} from './BaseService'
import { GROUPID } from '../util/settings/config'

export class FilmManagerService extends BaseService{
    
    getListBanner = () =>{
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }

    getListFilm = (name='') =>{
        if(name.trim() !== '')
        {
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${name}`)
        }
    }

    addFilmUploadImage = (formdData) =>{
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formdData)
    }

    getFilmInfor = (film_id) =>{
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${film_id}`)
    }

    updateFilmUpload = (formdData) =>{
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formdData)
    }

    deleteFilm = (film_id) =>{
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${film_id}`)
    }
}

export const filmManagerService = new FilmManagerService();