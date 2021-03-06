import React, {useEffect, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import MyCard from "../../../myComponents/Card/Card";
import axios from "axios";
import LoadingBox from '../../../myComponents/Loading'
import AlertComponent from "../../../myComponents/Alert";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../../actions/productAction";


const useStyles = makeStyles(styles);

const SectionBasics = ({cart, onAdToCart}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState([24, 22]);
    const productsList = useSelector(state=>state.productList);
    const {loading,error,products} = productsList;
    React.useEffect(() => {
            dispatch(listProducts())
    }, [dispatch]);
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };



    return (
        <div className={classes.sections}>
            {loading ? <LoadingBox loading = {loading}/>
                :
             error ? <AlertComponent text ={error} type={"error"}/>
                : (
             <div className={classes.container}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={4}
                        >
                            {products.map((row) => (
                                <MyCard
                                    key ={row.id.toString()}
                                    data={row}
                                />
                            ))}


                        </Grid>
                    </div>)}

        </div>
    );
}

export default SectionBasics
