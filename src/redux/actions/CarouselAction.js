import axios from "axios";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./type/CarouselType";
import { filmManagerService } from "../../services/FilmManagerService";
export const getCarouselAction = () =>{
    return async (dispatch) =>{
        const result = await filmManagerService.getListBanner();

        dispatch({
    
        })
    }
}