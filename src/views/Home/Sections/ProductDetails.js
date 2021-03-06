import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// @material-ui/icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

import SectionTabs from '../../../myComponents/Tabs/Tabs'
import Button from "components/CustomButtons/Button.js";
import Favorite from "@material-ui/icons/Favorite";
import {useDispatch, useSelector} from "react-redux";
import LoadingBox from "../../../myComponents/Loading";
import AlertComponent from "../../../myComponents/Alert";
import Grid from "@material-ui/core/Grid";
import MyCard from "../../../myComponents/Card/Card";
import {detailsProduct} from "../../../actions/productAction";
import {addToCart} from "../../../actions/cartAction";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//img


const myStyle = {
    image: {
        width: '100%',
        maxWidth: '550px'
    },
    noShadow: {
        boxShadow: 'none !important'
    }
}

const allStyle = {...styles, ...myStyle}

const useStyles = makeStyles(allStyle);

export default function ProductDetails(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;
    const id = window.location.pathname.split('/')[2].split('_')[window.location.pathname.split('/')[2].split('_').length-1]

    const [] = useState(1)

    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [])

    const addToCardHandler = () => {
        let qty = 1;
        let cartItems = localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []

        cartItems.forEach(row => {
            debugger;
            if (row.product.id === product.id) {
                qty = row.qty;
            }
        });
        dispatch(addToCart(product, qty));
    }
    return (
        <div className={classes.sections}>
            {loading ? <LoadingBox loading={loading}/>
                :
                error ? <AlertComponent text={error} type={"error"}/>
                    : (
                        <div className={classes.section}>
                            <div className={classes.container}>
                                <div id="navigation-pills">

                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={8} lg={6}>
                                            <img src={product.img} className={classes.image}/>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12} lg={6}>
                                            <div className={classes.container}>
                                                <h3 className={classes.title}
                                                    style={{marginTop: "20px"}}>{product.title}</h3>
                                                <h4 style={{marginTop: "5px"}}>{product.pret + " RON"}</h4>
                                            </div>
                                            <div>
                                                <SectionTabs data={product}/>
                                            </div>
                                            <div className={classes.container}
                                                 style={{display: "flex", justifyContent: "center"}}>
                                                <Button
                                                    color="success" round
                                                    onClick={addToCardHandler}
                                                >
                                                    <ShoppingCartIcon className={classes.icons}/> Adauga in cos
                                                </Button>
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                            </div>
                        </div>
                    )}
        </div>

    );
}
