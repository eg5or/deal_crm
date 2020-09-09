import React from 'react';
import classes from './deal.module.css'
import {NavLink} from 'react-router-dom';

const Deal = (props) => {
    return (
        <div className={classes.deal}>
            <div>{props.client}</div>
        </div>
    )

}

export default Deal;