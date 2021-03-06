import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        padding: '0 4px',
    },
}))(Badge);

export default function ShopBadges(props) {
    debugger;
    const totalItems = props.items.length;
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}
