import classes from './CurrencyExchange.module.scss'
import CurrencyLine from "../../Components/CurrencyLine/CurrencyLine"
import {connect} from "react-redux"
import {ChangeValue, CountValue, DropdownHandler} from "../../Redux/ActionCreators/ActionCreators";
import {useEffect} from "react";
import {getCurrencyListTC} from "../../Redux/Thunk/ThunkCreator";

const CurrencyExchange = ({currencyFields, ChangeValue, getCurrencyListTC, CountValue, DropdownHandler}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getCurrencyListTC(), [])
    const linesGenerator = currencyFields.map((line, id) => {
        return <CurrencyLine id={id}
                             tittle={line.tittle}
                             value={line.value}
                             currency={line.currency}
                             ChangeValue={ChangeValue}
                             CountValue={CountValue}
                             currencyFields={currencyFields}
                             key={id}
                             isActive={line.isActive}
                             DropdownHandler={DropdownHandler}
        />
    })
    return (
        <div className={classes.CurrencyExchange}>
            {linesGenerator}
        </div>
    )
}
const mapStateToProps = (state) => ({
    currencyFields: state.CurrencyReducer.currencyFields
})
export default connect(mapStateToProps,
    {CountValue, ChangeValue, getCurrencyListTC, DropdownHandler})(CurrencyExchange)