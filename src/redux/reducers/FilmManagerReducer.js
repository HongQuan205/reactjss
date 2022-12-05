import { SET_DANH_SACH_PHIM, SET_FILM_SAP_CHIEU, SET_FILM_DANG_CHIEU, SET_THONG_TIN_PHIM } from "../actions/types/FilmManagerType"
import { SET_CHI_TIET_PHIM } from "../actions/types/TheaterManagerType"

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1282,
            "tenPhim": "black panther wakanda forever",
            "biDanh": "black panther wakanda forever",
            "trailer": "https://www.youtube.com/watch?v=dMBjbnmaq0M",
            "hinhAnh": "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/7/26/1073031/Black-Panther4.jpg?w=800&crop=auto&scale=both",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-11-30T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "black panther wakanda forever",
            "biDanh": "black panther wakanda forever",
            "trailer": "https://www.youtube.com/watch?v=dMBjbnmaq0M",
            "hinhAnh": "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/7/26/1073031/Black-Panther4.jpg?w=800&crop=auto&scale=both",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-11-30T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDefault: {},
    thongtinPhim: []
}

export const FilmManagerReducer = (state = stateDefault, actions) => {
    switch (actions.type) {
        case SET_DANH_SACH_PHIM:
            state.arrFilm = actions.arrFilm
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        case SET_FILM_DANG_CHIEU:
            state.dangChieu = !state.dangChieu
            state.arrFilm = state.arrFilmDefault((film) => {return film.dangChieu = state.dangChieu})
            return { ...state }
        case SET_FILM_SAP_CHIEU:
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu );
            return {...state}
        case SET_CHI_TIET_PHIM :
            state.filmDetail = actions.filmDetail;
            return {...state};
        default : return {...state}
    }
}