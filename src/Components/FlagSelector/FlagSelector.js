import classes from "../DropDown/DropDown.module.scss";
import usa from "../../img/united-states.png";
import ukraine from "../../img/ukraine.png";
import eur from "../../img/european-union.png";
import rus from "../../img/russia.png";

const flagSelector = (currencies) => {
    switch (currencies) {
        case 'USD':
            return <img className={classes.flag} src={usa} alt="flag"/>
        case 'UAH':
            return <img className={classes.flag} src={ukraine} alt="flag"/>
        case 'EUR':
            return <img className={classes.flag} src={eur} alt="flag"/>
        case 'RUR':
            return <img className={classes.flag} src={rus} alt="flag"/>
        default: return <img className={classes.flag} src={ukraine} alt="flag"/>
    }
}
export default flagSelector