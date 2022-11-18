import React from "react";
import { useSelector } from "react-redux";
import styleLoading from './LoadingComponent.module.css'
export default function LoadingCoponent(){
    const {isLoading} = useSelector(state => state.LoadingReducer)
    console.log(isLoading)
    if(isLoading)
    {
        return(
            <div className={styleLoading.bgLoading}>
                <img alt="loadingcomponent" src = {require('../../assets/imgLoading/loading.gif')} />
            </div>
        )
    }
    else{
        return ''
    }
}