import React from 'react';
import classes from './DealsPage.module.css'
import DealsItems from './DealsItems/DealsItems';

const DealsPage = (props) => {
    debugger
    console.log(props)
    return (
        <div>
            <div className={classes.dealsPageItems}>
                <DealsItems dealsPage={props.dealsPage}/>
            </div>
        </div>
    )
}

export default DealsPage;