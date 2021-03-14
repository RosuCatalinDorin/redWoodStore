import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../actions/cartAction";
import MyCard from "../../myComponents/Card/Card";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function InteractiveList() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const {cartItems}  =  cart;
    let totalPrice = 0
    let shippingCost
    cartItems.forEach(row =>(
        totalPrice += row.qty * row.product.pret
    ));
    totalPrice > 300 ? shippingCost = 0 : shippingCost=14.59;
    console.log(totalPrice);
    const removeItemToCart  = (id) => {
        dispatch(removeFromCart(id))
    }
    console.log(cartItems);
    return (
        <div className={classes.root}>
            <Grid container  style ={{display:"flex",justifyContent:"center"}}>
                <Grid item xs={12} md={10} >
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {cartItems.map(row =>(
                                <ListItem   key ={row.product.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Avatar alt="Product" src={row.product.img} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={row.product.title}
                                        secondary= {"x"+row.qty+ " "+ row.product.pret * row.qty + " Lei"}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete"  onClick={() => {removeItemToCart(row.product.id)}}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                            <div style={{marginLeft:'20px'}}>
                                <h5>Cost produse: {totalPrice +" Lei"}</h5>
                                <h5>Cost livrare si procesare: {shippingCost +" Lei"}</h5>
                                <h4>Subtotal: {totalPrice+shippingCost +" Lei"}</h4>
                            </div>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
