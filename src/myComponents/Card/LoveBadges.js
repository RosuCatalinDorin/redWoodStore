import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        padding: '0 4px',
    },
}))(Badge);

export default function ShopBadges() {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="secondary">
                <FavoriteIcon color={"with"}/>
            </StyledBadge>
        </IconButton>
    );
}
