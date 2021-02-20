import React from "react";
import {connect} from 'react-redux';
import {addToCard} from "../../store/actions";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import MyCard from "../../../myComponents/Card/Card";


const useStyles = makeStyles(styles);

const SectionBasics = ({cart,onAdToCart}) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([24, 22]);

    React.useEffect(() => {
        return function cleanup() {
        };
    });
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

    const products = [
        {
            title: "Tavita cafea",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/tavaCafea.jpeg?alt=media&token=ca99a697-aa77-43bf-8600-2391a1a332ff"
        },
        {
            title: "Litere de lemn ",
            description: "Litere de lemn de fag bbla bla bla bla bla bbla bla bla bla bla ",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-06%20at%2019.58.08.jpeg?alt=media&token=1d74f2a9-742d-4771-b8b5-1634c2dc35ef"
        },
        {
            title: "Decoratiuni perete",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-12%20at%2008.20.37.jpeg?alt=media&token=34f6db3d-5ae8-408c-abb4-e76304bbb30d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        },
        {
            title: "Suport telefon lemn masiv",
            description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
            id: "22",
            img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
        }
    ];
    const addToCart = () => {
        this.props.addToCart(2)
    }
    return (
        <div className={classes.sections}>
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
                            data={row}
                        />
                    ))}


                </Grid>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    cart: state.cart
})
const mapDispatchToProps = (dispatch) => ({
    onAdToCart: id => dispatch(addToCard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionBasics)
