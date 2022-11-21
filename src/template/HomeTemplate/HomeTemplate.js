import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from '../HomeTemplate/Layout/Header/Header'
import Footer from './Layout/Footer/Footer'

export const HomeTemplate = (props) => {
    const { Component, ...restParam } = props

    return <Route  {...restParam} render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />

            <hr className='mt-5' />
            <Footer/>
        </Fragment>
    }} />
}