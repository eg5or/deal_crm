import React from 'react';
import classes from './DealsItems.module.css'
import Deal from './Deal/Deal';

const DealsItems = (props) => {

    let dealsElements = props.deals.map(d => <Deal key={d.id} client={d.client} />)

    return (
        <div>
            <div className={classes.dealsPageItems}>
                {dealsElements}
            </div>
        </div>
    )
};

export default DealsItems;