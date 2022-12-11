import React, {useEffect} from "react";
import {Carousel} from 'antd';
import { useSelector,useDispatch } from "react-redux";
import {getCarouselAction} from '../../../../redux/actions/CarouselAction'
import './HomeCarousel.css'

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
        dispatch(getCarouselAction())
    })

    const renderImg = (arrImg) =>{
        return arrImg.map((item, index) =>{
            return <div key={index}>
                <div style={{...stylePayload, backgroundImage : `url(${item.hinhAnh})`}}>
                    <img src={item.hinhAnh} alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return(
        <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}} >
            {renderImg(arrImg)}
        </Carousel>
    )
}