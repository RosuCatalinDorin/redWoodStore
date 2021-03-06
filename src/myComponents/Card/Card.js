import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from "@material-ui/core/Button";
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
    debugger;
    const handleExpandClick = () => {
        setExpanded(!expanded);
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

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.title}
                subheader={ data.pret + " Lei"}
            />
            <CardContent>

            </CardContent>
            <CardActions disableSpacing>
                <Button
                    onClick={() => {openProductDetails(data.description+'_'+data.id)}}
                    size="small">Vezi detalii</Button>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <AddShoppingCartIcon  />
                </IconButton>
            </CardActions>
        </Card>
    );
}