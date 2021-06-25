import {connect} from "react-redux"
import classes from './DropDown.module.scss'
import flagSelector from '../FlagSelector/FlagSelector'
import {CurrencySelector} from "../../Redux/ActionCreators/ActionCreators";

const DropDown = ({currencyList, isActive, selectedCurrency, CurrencySelector, id}) => {
    const currencyListGenerator = currencyList.map(currency => {
        return currency.ccy !== 'BTC' &&
            selectedCurrency !== currency.ccy &&
            <div
                key={Math.random() + currency}
                onClick={() => CurrencySelector(id, currency.ccy)}
            >
                {currency.ccy}
                {flagSelector(currency.ccy)}
            </div>
    })
    return (
        isActive && <div className={classes.DropDown}>
            {currencyListGenerator}
        </div>
    )
}
const mapStateToProps = (state) => ({
    currencyList: state.CurrencyReducer.currencyList
})
export default connect(mapStateToProps, {CurrencySelector})(DropDown)