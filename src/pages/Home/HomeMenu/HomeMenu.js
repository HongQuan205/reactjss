import React, {Fragment} from 'react'
import {Tabs, Radio, Space} from 'antd'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

export default class Demo extends React.PureComponent{

    state = {
        tabPosition: 'left'
    }

    changeTabPosiotion = e =>{
        this.setState({tabPosition: e.target.value});
    }
    componentDidMount(){

    }

    renderTheaterSystem(){

    }

    render (){
        const {tabPosition} = this.state;
        return(
            <>
                <Tabs tabPosition= {tabPosition}>
                    {this.renderTheaterSystem()}
                </Tabs>
            </>
        )


    }

}