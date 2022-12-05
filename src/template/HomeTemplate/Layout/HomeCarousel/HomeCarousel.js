import React, {useEffect} from "react";
import {Carousel} from 'antd';
import { useSelector,useDispatch } from "react-redux";

import axios from "axios";
import '.HomeCarousel.css'

const stylePayload = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
}

export default function HomeCarousel(props) {
    const {arrImg} = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch()
    })
}