import { filmManagerService, FilmManagerService } from "../../services/FilmManagerService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/FilmManagerType";
import { history } from '../../App'

export const getListFilmAction = (name = '') => {

    return async (dispatch) => {
        try {
            const result = await FilmManagerService.getListFilm(name)
            if (result.status === 200) {
                dispatch({
                    type: SET_DANH_SACH_PHIM,
                    arrFilm: result.data.content
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const addFilmUploadImageAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await FilmManagerService.addFilmUploadImage(formData);
            alert('Add Film Successfully')
            console.log('result add film upload image action')
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const updateFilmUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await FilmManagerService.updateFilmUpload(formData);
            alert('upload film successfully')
            console.log('result update film upload action', result.data.content)
            if (result.status === 200) {
                dispatch(getListFilmAction());
                history.push('/admin/films');
            }
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const getFilmInfor = (id) => {
    return async (dispatch) => {
        try {
            const result = await filmManagerService.getFilmInfor()
            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_PHIM,
                    thongTinPhim: result.data.content
                })
            }

        } catch (error) {
            console.log('errors', error)
        }
    }
}
