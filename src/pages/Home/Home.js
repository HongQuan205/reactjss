import React,{useEffect, useState} from "react";
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from "react-redux";
import { getListFilmAction } from "../../redux/actions/FilmManagerAction";
import { getListTheaterAction } from "../../redux/actions/TheaterManagerAction";


export default function Home(props){

    const {arrFilm} = useSelector(state => state.FilmManagerReducer)
    const {TheaterSystem} = useSelector(state => state.TheaterManagerReducer)
    const dispatch = useDispatch();
    console.log('propsHome', arrFilm)
    useEffect(() =>{
        const action = getListFilmAction()
        dispatch(action)
        dispatch(getListTheaterAction())
    },[])
}

return (
    <div>
        
    </div>
)