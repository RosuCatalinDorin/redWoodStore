import React, {useState} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
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
    const classes = useStyles();
    const [orase, setOrase] = useState([]);
    const [antoine, setAntoine] = useState(false);

    const [obj, setObj] = useState({});
    const [disableItemOrase, setDisableItemOrase] = useState(true);
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    console.log(order);
    const getCity = async (value) => {
        const oraseJudet = await Axios.get('https://roloca.coldfuse.io/orase/' + value.auto);
        setOrase(oraseJudet.data);
        setDisableItemOrase(false);
        order.judet = value.nume;
        dispatch(addToOrder(order));
    }
    const handlerChangeCity = (value) =>{
        order.localitate = value.nume
        dispatch(addToOrder(order));
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
        dispatch(addToOrder(order));
    }

    return (
        <div className={classes.container}>
            <GridContainer style={{display: "flex", justifyContent: "center"}}>
                <GridItem md={10}>
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="name" label="Nume" value ={order.name}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="prenume" label="Prenume" value={order.prenume}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="telefon" label="Telefon" value={order.telefon}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField style={{padding: "5px", width: "100%"}} id="email" label="Email" value={order.email}
                                       onChange={handlerChange}/>
                        </Grid>
                    </Grid>
                    <Autocomplete
                        style={{marginTop: "20px"}}
                        id="combo-box-demo"
                        options={judete}
                        getOptionLabel={(option) => option.nume}
                        renderInput={(params) => <TextField {...params} label="Selecteaza judetul" variant="outlined"/>}
                        //     getOptionSelected={(option) =>{getCity(option.auto)}}
                        onChange={(event, value) => getCity(value)}
                        value={order.judet}
                    />
                    <Autocomplete
                        style={{marginTop: "20px"}}
                        id="orase"
                        disabled ={disableItemOrase}
                        options={orase}
                        getOptionLabel={(option) => option.nume}
                        onChange={(event, value) => handlerChangeCity(value)}
                        renderInput={(params) => <TextField {...params} label="Selecteaza Localitate"
                        value={order.orase}
                                                            variant="outlined"/>}
                    />
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="strada" label="Strada" value={order.strada}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="numar" label="Numar" value={order.numar}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField style={{padding: "5px", width: "100%"}} id="codPostal" label="Cod postal" value={order.codPostal}
                                       onChange={handlerChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField style={{padding: "5px", width: "100%"}} id="deliveryDetails" value ={order.deliveryDetails}
                                       label="Detalii suplimentare pentru livrare"
                                       onChange={handlerChange}/>
                        </Grid>

                        <FormControlLabel
                            control={<Checkbox checked={order.gdpr} id="antoine" onChange={handleChangeCheckbox}
                                               name="antoine" />
                            }
                            label="Imi exprima acordul pentru prelucrarea datelor cu caracter personal"
                        />
                    </Grid>
                </GridItem>
            </GridContainer>
        </div>

    );
}
