import { filmManagerService } from "../../services/FilmManagerService";
import { theaterManageService } from "../../services/TheaterManageService";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from './types/TheaterManagerType'

export const getListTheaterAction = () =>{
    return async (dispatch) =>{
        try {
            const result = await theaterManageService.getListTheaterSystem();
            console.log('result get list theater action', result.data.content)
            if(result.status === 200)
            {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content
                })
            }
        } catch (error) {
            console.log("errors", error.response?.data)
        }
    }
}

export const getFilmDetailInfor = (id) =>{
    return async dispatch =>{
        try {
            const result = await filmManagerService.getMovieScreenInfor(id)
            if(result.status === 200)
            {
                dispatch({
                    type: SET_CHI_TIET_PHIM,
                    filmDetail : result.data.content
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}