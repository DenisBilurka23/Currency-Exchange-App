import classes from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Nav = ({isActive, NavToggle}) => {
    return (
        <div>
            {isActive && <div className={classes.background}/>}
            <div className={`${isActive && classes.active} ${classes.Nav}`}>
                <NavLink to="/">Exchange</NavLink>
                <NavLink to="/history">History</NavLink>
                <div onClick={() => NavToggle()} className={classes.icon}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
            </div>
        </div>
    )
}
export default Nav