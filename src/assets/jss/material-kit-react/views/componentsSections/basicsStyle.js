import { container, title } from "assets/jss/material-kit-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";
import imgbackground from "../../../../img/myImg/home/pngeggRoz.png";

const basicsStyle = {
  sections: {
    padding: "70px 0",
    backgroundImage :"url("+imgbackground+")"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
