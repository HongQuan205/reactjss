import React, { useEffect, useState } from "react";
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from "react-redux";
import { getListFilmAction } from "../../redux/actions/FilmManagerAction";
import { getListTheaterAction } from "../../redux/actions/TheaterManagerAction";
import HomeCarousel from '../../template/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
export default function Home(props) {
    const { arrFilm } = useSelector(state => state.FilmManagerReducer)
    const { TheaterSystem } = useSelector(state => state.TheaterManagerReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(getListFilmAction())
        dispatch(getListFilmAction())
        dispatch(getListTheaterAction())
    }, [])

    return (
        <div>
            <HomeCarousel />
    
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >
    
                    {/* <MultipleRowSlick arrFilm={arrFilm} /> */}
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                {renderFilms()}
            </div> */}
                </div>
            </section>
    {/* 
            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
    
            </div> */}
        </div>
    )
}

