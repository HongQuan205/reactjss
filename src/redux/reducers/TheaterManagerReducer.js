import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/TheaterManagerType"

const stateDefault = {
    TheaterSystem : []
}


export const TheaterManagerReducer = (state = stateDefault, actions) =>{
    switch (actions.type) {
        case SET_HE_THONG_RAP_CHIEU:
            state.heThongRapChieu = actions.heThongRapChieu
            return {...state}
        default: return {...state}
    }
}