import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import OrderForm from "./OrderForm";
import OrderDetails from "./OrderDetails";
import OrderFinish from "./OrderFinish";
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";
import {saveOrderToDb,addToOrder} from "../../actions/orderAction";
import LoadingBox from "../../myComponents/Loading";
import AlertComponent from "../../myComponents/Alert";
import MyCard from "../../myComponents/Card/Card";
import {removeAllProducts} from "../../actions/cartAction";
import imgDone from "../../assets/img/myImg/OrdePage/pngwing.com.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Finalizeaza comanda', 'Completeaza datele pentru livrare', 'Trimite comanda'];
}

function getStepContent(stepIndex,setDisableBut) {
    switch (stepIndex) {
        case 0:
            return <OrderDetails/>;
        case 1:
            return <OrderForm setDisableButon={setDisableBut}/>;
        case 2:
            return <OrderFinish/>;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const loading =order.loading;
    const error =order.err;
    const msg = order.msg;
    const cart = useSelector(state => state.cart)
    const [activeStep, setActiveStep] = React.useState(0);
    const [errorForm, setErrorForm] = React.useState({
        errName: false,
        errPrenume: false,
        errTelefon: false,
        errEmail: false,
        errJudet: false,
        errOras: false,
        errStada: false,
        errNumer: false,
        errCodPostal: false,
    });
    const [disableButton,setDisableButton]= React.useState(false);
    const steps = getSteps();
    const history = useHistory();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    const goToHome = () => {
        history.push("/");
    };
    const saveOrder = () => {
        console.log(order);
        let data = {
            "customer": order,
            "products": cart
        }

        dispatch(saveOrderToDb(data));
    }
    const setDisableBut = (action) => {
        setDisableButton(action);
    }
    if(msg ==="OK"){
        order.msg ="DONE"
        dispatch(removeAllProducts());
        dispatch(addToOrder(order))
        handleNext();
    }
    if(activeStep === 0 && disableButton === true){
        setDisableButton(false)
    }
    return (
        <div className={classes.root}>
            {loading ? <LoadingBox loading={loading}/>
                :
                error ? <AlertComponent text={error} type={"error"}/>
                    : (
                        <div>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div>
                                {activeStep === steps.length ? (
                                    <div className={classes.root}>
                                        <Grid container style={{display: "flex", justifyContent: "center"}}>
                                            <Grid item xs={12} md={10}>
                                                <div className={classes.demo} style={{textAlign: "center"}}>
                                                    <img src={imgDone} style={{width: "110px"}}/>
                                                    <Typography className={classes.instructions}>Va multumim pentru comanda!
                                                        Comanda a fost finalizata cu succes!</Typography>
                                                    <Button color="primary" variant="contained" onClick={goToHome}>Acasa</Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ) : (
                                    <div>
                                        <Typography
                                            className={classes.instructions}>{getStepContent(activeStep,setDisableBut)}</Typography>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.backButton}
                                            >Back
                                            </Button>
                                            {activeStep === steps.length - 1 ?
                                                <Button variant="contained" color="primary" onClick={saveOrder}>
                                                    Finalizeaza comanda
                                                </Button> :
                                                <Button disabled={disableButton} variant="contained" color="primary" onClick={handleNext}>
                                                    Next
                                                </Button>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
        </div>
    );
}
