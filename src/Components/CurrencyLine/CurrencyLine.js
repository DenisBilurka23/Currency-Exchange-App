import classes from './CurrencyLine.module.scss'
import select from '../../img/Shape_1.png'
import DropDown from "../DropDown/DropDown";
import flagSelector from "../FlagSelector/FlagSelector";

const CurrencyLine = (props) => {
    const onChangeHandler = e => {
        props.ChangeValue(e.target.value, props.id)
        if (props.currencyFields[0].selectedCurrency && props.currencyFields[1].selectedCurrency) {
            const setValue = (line) => {
                const avarageCurrencyPriceFirst = (Number(props.currencyFields[0].selectedCurrency.buy) + Number(props.currencyFields[0].selectedCurrency.sale)) / 2
                const avarageCurrencyPriceSecond = (Number(props.currencyFields[1].selectedCurrency.buy) + Number(props.currencyFields[1].selectedCurrency.sale)) / 2
                let value = null
                line === 0 ? value = e.target.value * avarageCurrencyPriceFirst / avarageCurrencyPriceSecond :
                    value = e.target.value * avarageCurrencyPriceSecond / avarageCurrencyPriceFirst
                return value ? value.toFixed(2) : ''
            }
            props.id === 0 ? props.CountValue(setValue(props.id), 1) : props.CountValue(setValue(props.id), 0)
        }
    }
    const onClickHandler = () => {
        props.DropdownHandler(props.id)
    }
    return (
        <div className={classes.CurrencyLine}>
            <span className={classes.currencyTittle}>{props.tittle}</span>
            <div className={classes.currencyField}>
                <input onChange={onChangeHandler} placeholder="0" value={props.value} type="text"/>
                <div onClick={onClickHandler} className={classes.currency}>
                    <span>{props.currency}</span>
                    <span className={classes.flag}>{flagSelector(props.currency)}</span>
                    <span><img src={select} alt="select"/></span>
                    <DropDown id={props.id} selectedCurrency={props.currency} isActive={props.isActive}/>
                </div>
            </div>
        </div>
    )
}
export default CurrencyLine