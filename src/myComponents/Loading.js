import React from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const propTypes = {
    loading: PropTypes.bool
};

const defaultProps = {
    loading:false
}

const useStyles = makeStyles( (theme) => ({
    backdrop: {
        zIndex: 12,
        color: '#fff',
    },
}));

const Loading = (props) => {

    const classes = useStyles();
    const {loading} = props;

    return (
        <Backdrop
            open={loading}
            className={classes.backdrop}
        >
            <CircularProgress />
        </Backdrop>
    )
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;