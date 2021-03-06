import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/components/customInputStyle.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import GridContainer from "../../components/Grid/GridContainer.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import CardBody from "../../components/Card/CardBody";
import GridItem from "../../components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function OrderForm(props) {
    const classes = useStyles();
    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success
    } = props;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classNames(
            formControlProps.className,
            classes.formControl
        );
    } else {
        formControlClasses = classes.formControl;
    }
    return (
        <div className={classes.container}>
            <GridContainer style ={{display:"flex",justifyContent:"center"}}>
                <GridItem md={10}>
            <CustomInput
                labelText="First Name..."
                id="first"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "text",
                    endAdornment: (
                        <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                        </InputAdornment>
                    )
                }}
            />
            <CustomInput
                labelText="Email..."
                id="email"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "email",
                    endAdornment: (
                        <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                    )
                }}
            />
            <CustomInput
                labelText="Password"
                id="pass"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "password",
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                                lock_outline
                            </Icon>
                        </InputAdornment>
                    ),
                    autoComplete: "off"
                }}
            />
                </GridItem>
            </GridContainer>
        </div>

    );
}
