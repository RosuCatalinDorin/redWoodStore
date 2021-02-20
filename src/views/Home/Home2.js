import React, {Component} from "react";
import {connect} from "react-redux";
import {addToCard} from "../store/actions";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import {Button} from "@material-ui/core";
import classNames from "classnames";
import SectionHome from "./Sections/SectionHome";
import Footer from "../../components/Footer/Footer";
import {createMuiTheme, withStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/components";
import { container } from "assets/jss/material-kit-react.js";

const theme = createMuiTheme(styles)
const useStyles = (theme) => ({
        container,
        brand: {
            color: "#FFFFFF",
            textAlign: "left"
        },
        title: {
            fontSize: "4.2rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        },
        subtitle: {
            fontSize: "1.313rem",
            maxWidth: "800px",
            margin: "10px 0 0"
        },
        main: {
            background: "#FFFFFF",
            position: "relative",
            zIndex: "3"
        },
        mainRaised: {
            margin: "-60px 30px 0px",
            borderRadius: "6px",
            boxShadow:
                "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        },
        link: {
            textDecoration: "none"
        },
        textCenter: {
            textAlign: "center"
        },
        homeButton :{
            marginTop:"10px"
        }


})


class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    render() {
        const {...rest} = this.props;
        const {classes,cart} = this.props;
        debugger;
        return (
            <div>
                <Header
                    brand="Red Wood Store"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 200,
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
                                            variant="contained"
                                    >
                                        Default</Button>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <SectionHome/>
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart
})
const mapDispatchToProps = (dispatch) => ({
    onAdToCart: id => dispatch(addToCard(id))
});
export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(Home2));