import React from 'react';
import {connect} from 'react-redux';
import DealsPage from './DealsPage';

const mapStateToProps = (state) => {
    debugger
    return {
        dealsPage: state.dealsPage
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        }
    }


const DealsPageContaine = connect(mapStateToProps, mapDispatchToProps)(DealsPage);

export default DealsPageContaine;