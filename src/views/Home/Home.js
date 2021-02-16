import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/components.js";

import SectionHome from "./Sections/SectionHome";
import {Button} from "@material-ui/core";


const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <Header
                brand="Red Wood Store"
                rightLinks={<HeaderLinks/>}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "black"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/myImg/home/pexels-vlada-karpovich-4050334.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}> <a>RED</a> Wood Store.</h1>
                                <h3 className={classes.subtitle}>
                                    Cele mai placute momente de relaxare sunt cele petrecute chiar in confortul casei tale.
                                </h3>
                                <Button className={classes.homeButton}
                                        variant="contained">
                                    Default</Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionHome />
            </div>
            <Footer/>
        </div>
    );
}
