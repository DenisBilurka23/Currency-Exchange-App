import axios from "axios";
import {GetCurrencyList, SelectInitialCurrency} from "../ActionCreators/ActionCreators";

export const getCurrencyListTC = () => async (dispatch) => {
    const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    dispatch(GetCurrencyList(response.data))
    dispatch(SelectInitialCurrency())
}