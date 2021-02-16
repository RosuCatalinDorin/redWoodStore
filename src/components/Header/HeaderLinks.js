/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import {
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor
} from "assets/jss/material-kit-react.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import HomeIcon from '@material-ui/icons/Home';
import Email from "@material-ui/icons/Email";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopBadges from "../../myComponents/Card/ShopBadges";
import LoveBadges from "../../myComponents/Card/LoveBadges";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const anchorRefLove = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
            <Tooltip
                id="home"
                title="Home"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
            <Button
                href="/"
                color="transparent"
                className={classes.navLink}

            >
        <HomeIcon
            style={{ fontSize: 79 }}
        />
            </Button>
            </Tooltip>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/redwoodstoreromania"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/red.wood.store/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
        <ListItem className={classes.listItem}>
                <Button
                    style = {{paddingTop:"0"}}
                    color="transparent"
                    className={classes.navLink}
                    ref={anchorRefLove}
                    aria-controls={open ? 'love-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <LoveBadges/>
                </Button>
            <Popper open={open} anchorEl={anchorRefLove.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="love-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Tavita lemn</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </ListItem>
        <ListItem className={classes.listItem}>

            <Button
                style = {{paddingTop:"0"}}
                color="transparent"
                className={classes.navLink}
                ref={anchorRef}
                aria-controls={open ? 'lista-cos-cumparaturi' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <ShopBadges/>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="lista-cos-cumparaturi" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Tavita lemn</MenuItem>
                                    <MenuItem onClick={handleClose}>Litere de lemn</MenuItem>
                                    <MenuItem onClick={handleClose}>Decoratiuni</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </ListItem>
        {/*todo:userul nu se afiseaza ok imaginea de profil
        */}
        {/*        <ListItem className={classes.listItem}>
            <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                dropdownHeader="Dropdown Header"
                buttonText={
                    <img
                        src={profileImage}
                        className={classes.img}
                        alt="profile"
                    />
                }
                buttonProps={{
                    className:
                        classes.navLink + " " + classes.imageDropdownButton,
                    color: "transparent"
                }}
                dropdownList={[
                    "Me",
                    "Settings and other stuff",
                    "Sign out"
                ]}
            />
        </ListItem>*/}
        {/* todo:register este prea aoprope de notification*/}
        {/*<ListItem className={classes.listItem}>
            <Button
                href="#pablo"
                className={classes.registerNavLink}
                onClick={e => e.preventDefault()}
                color="rose"
                round
            >
                Register
            </Button>
        </ListItem>
   */}
    </List>
  );
}
