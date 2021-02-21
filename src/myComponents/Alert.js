import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { Alert } from '@material-ui/lab';
import {  Collapse, IconButton, Grid } from '@material-ui/core';


const useStyles = makeStyles( (theme) => (
    {
        margin:{
            marginTop: 10,
            marginBottom:10
        }
    }
));


const AlertComponent = (props) => {

    const classes = useStyles();
    const { text, type } = props;
    const [open,setOpen] = React.useState(true);

    return(
        <Grid item className={classes.margin}>
            <Collapse in={open}>
                <Alert
                    severity={type}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {text}
                </Alert>
            </Collapse>
        </Grid>
    );
}

export default AlertComponent;