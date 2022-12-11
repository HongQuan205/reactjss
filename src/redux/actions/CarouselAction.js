import axios from "axios";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../actions/types/CarouselType";
import { filmManagerService } from "../../services/FilmManagerService";
export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await filmManagerService.getListBanner();

            dispatch({
                type: SET_CAROUSEL,
                arrImg:result.data.content
            })
        } catch (error) {
            console.error(error)
        }
    }
}