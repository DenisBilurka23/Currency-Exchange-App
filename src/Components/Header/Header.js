import classes from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import Nav from "../Nav/Nav";
import {NavToggle} from "../../Redux/ActionCreators/ActionCreators";

const Header = ({isActive, NavToggle}) => (
    <div>
        <div className={classes.Header}>
            <div onClick={() => NavToggle()}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div>
                <span>logout</span>
                <FontAwesomeIcon icon={faSignOutAlt}/>
            </div>
        </div>
        <Nav NavToggle={NavToggle} isActive={isActive}/>
    </div>
)
const mapStateToProps = (state) => ({
    isActive: state.CurrencyReducer.showNav
})
export default connect(mapStateToProps, {NavToggle})(Header)