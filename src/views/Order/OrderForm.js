import React, {useState} from "react";

import {makeStyles} from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/components/customInputStyle.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import judete from "../../data/Judete";
import * as Axios from "axios";
import {Grid} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {useDispatch, useSelector} from "react-redux";
import {addToOrder} from "../../actions/orderAction";

const useStyles = makeStyles(styles);

export default function OrderForm(props) {
    const {setDisableButon} = props;
    const classes = useStyles();
    const [orase, setOrase] = useState([]);
    const [antoine, setAntoine] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorPrenume, setErrorPrenume] = useState(false);
    const [errorTelefon, setErrorTelefon] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorJudet, setErrorJudet] = useState(true);
    const [errorOras, setErrorOras] = useState(true);
    const [errorStrada, setErrorStrada] = useState(false);
    const [errorNumar, setErrorNumar] = useState(false);
    const [errorCodPostal, setErrorCodPostal] = useState(false);

    const [obj, setObj] = useState({});
    const [disableItemOrase, setDisableItemOrase] = useState(false);
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    debugger
    if(!errorName && !errorPrenume && !errorTelefon && !errorEmail && !errorJudet && !errorOras && !errorStrada && !errorNumar && !errorCodPostal && order.gdpr)
        setDisableButon(false)
    else
        setDisableButon(true)
    const getCity = async (value) => {
    debugger;
        if (value !== null) {
            validateImput(value, "judet")
            const oraseJudet = await Axios.get('https://roloca.coldfuse.io/orase/' + value.auto);
            setOrase(oraseJudet.data);
            setDisableItemOrase(false);
            order.judet = value.nume;
            dispatch(addToOrder(order));
        } else {
            setDisableItemOrase(true);
            order.judet = "";
            validateImput("", "judet")
            dispatch(addToOrder(order));
        }

    }
    const handlerChangeCity = (value) => {
        validateImput(value, "oras")
        if (value !== null) {
            validateImput(value, "oras")
            order.localitate = value.nume;
            dispatch(addToOrder(order));
        } else {
            order.localitate = "";
            validateImput("", "oras")
            dispatch(addToOrder(order));
        }

    }
    const handleChangeCheckbox = (event) => {
        setAntoine(event.target.checked);
        order.gdpr = event.target.checked
        dispatch(addToOrder(order));
    };
    const handlerChange = (e) => {
        const {id, value} = e.target;
        order[id] = value;
        setObj({
            ...obj,
            [id]: value
        })
        if (id !== 'deliveryDetails' && id !=='email') {
            validateImput(value, id)
        } else if( id ==='email'){
            setErrorEmail(validateEmail(value));
        }
        dispatch(addToOrder(order));
    }
    const validateImput = (value, id) => {
        let code
        value.length < 3 ?
            code = "setError" + id.charAt(0).toUpperCase() + id.slice(1) + "(true)" :
            code = "setError" + id.charAt(0).toUpperCase() + id.slice(1) + "(false)"

        eval(code);
    }

    const validateEmail = (email) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return false
        }
        return true
    }
    return (
        <box className={classes.container}>
            <GridContainer style={{display: "flex", justifyContent: "center"}}>
                <GridItem md={10}>
                    <Grid container style={{marginLeft: "10px", marginRight: "10px"}}>

                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="name" label="Nume" value={order.name}
                                       error={errorName}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="prenume" label="Prenume"
                                       value={order.prenume} error={errorPrenume}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="telefon" label="Telefon"
                                       value={order.telefon} error={errorTelefon}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField style={{padding: "5px", width: "100%"}} id="email" label="Email"
                                       value={order.email} error={errorEmail}
                                       onChange={handlerChange}/>
                        </Grid>
                    </Grid>
                    <Autocomplete xs={12} sm={4}
                                  style={{marginTop: "20px", marginLeft: "10px"}}
                                  id="combo-box-demo"
                                  options={judete}
                                  getOptionLabel={(option) => option.nume}
                                  renderInput={(params) => <TextField {...params} label="Selecteaza judetul"
                                                                      variant="outlined" error={errorJudet}/>}
                        //     getOptionSelected={(option) =>{getCity(option.auto)}}
                                  onChange={(event, value) => getCity(value)}
                                  value={order.judet}
                                  erro
                    />
                    <Autocomplete
                        xs={12} sm={4}
                        style={{marginTop: "20px", marginLeft: "10px"}}
                        id="orase"
                        disabled={disableItemOrase}
                        options={orase}
                        getOptionLabel={(option) => option.nume}
                        onChange={(event, value) => handlerChangeCity(value)}
                        renderInput={(params) => <TextField {...params} required={true} label="Selecteaza Localitate"
                                                            value={order.orase} variant="outlined" error={errorOras}/>}
                    />
                    <Grid container style={{marginLeft: "10px", marginRight: "10px"}}>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="strada" label="Strada"
                                       required={true} value={order.strada} error={errorStrada}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="numar" label="Numar" required={true}
                                       value={order.numar} error={errorNumar}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="codPostal" required={true}
                                       label="Cod postal" value={order.codPostal} error={errorCodPostal}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField style={{padding: "5px", width: "100%"}} id="deliveryDetails" required={true}
                                       value={order.deliveryDetails}
                                       label="Detalii suplimentare pentru livrare"
                                       onChange={handlerChange}/>
                        </Grid>

                        <FormControlLabel
                            control={<Checkbox checked={order.gdpr} id="antoine" required={true}
                                               onChange={handleChangeCheckbox}
                                               name="antoine"/>
                            }
                            label="Imi exprim acordul pentru prelucrarea datelor cu caracter personal"
                        />
                    </Grid>
                </GridItem>
            </GridContainer>
        </box>

    );
}
