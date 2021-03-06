import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs(props) {
    const classes = useStyles();
    const {data} = props;
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <div id="nav-tabs">
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <CustomTabs
                                plainTabs
                                headerColor="danger"
                                tabs={[
                                    {
                                        tabName: "Descriere",
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                {data.description}
                                            </p>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
