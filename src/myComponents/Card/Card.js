import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import {addToCart} from "../../actions/cartAction";
import {useDispatch, useSelector} from "react-redux";
import Notiflix from "notiflix";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 345,
        marginLeft:30,
        marginTop:30,
        ['@media (max-width:980px)']: {
            marginLeft:0,
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const {data} = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {products} = productList;

    const addItemToCart = (id) => {
        const product = products.filter(product =>product.id === id)
        debugger;
        let qty = 1;
        let cartItems = localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []

        cartItems.forEach(row => {
            if (row.product.id === products.id) {
                qty = row.qty;
            }
        });
        dispatch(addToCart(product[0], qty));
        Notiflix.Notify.Success('Produsul a fost adaugat in cosul de cumparaturi');
    };
    const openProductDetails = (data) =>{
        let id = data.replace(/ /g,"_");
        history.push("/product-page/"+id);
    };
    return (

        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={data.img}
                title="Paella dish"
            />
            <CardHeader

                title={data.title}
                subheader={ data.pret + " Lei"}
            />
            <CardContent>

            </CardContent>
            <CardActions disableSpacing>
                <Button
                    color="primary"
                    onClick={() => {openProductDetails(data.description+'_'+data.id)}}
                    size="large">Vezi detalii
                </Button>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={() => {addItemToCart(data.id)}}

                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <AddShoppingCartIcon  />
                </IconButton>
            </CardActions>
        </Card>
    );
}