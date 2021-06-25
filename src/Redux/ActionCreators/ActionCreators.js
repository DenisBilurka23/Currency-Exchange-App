import {
    CHANGE_INPUT_VALUE,
    COUNT_VALUE, DROPDOWN_HANDLER,
    GET_CURRENCY_LIST, NAV_TOGGLE, SELECT_CURRENCY,
    SELECT_INITIAL_CURRENCY
} from "../ActionTypes/ActionTypes";

export const ChangeValue = (value, id) => ({
    type: CHANGE_INPUT_VALUE,
    value,
    id
})
export const GetCurrencyList = (payload) => ({
    type: GET_CURRENCY_LIST,
    payload
})
export const CountValue = (value, id) => ({
    type: COUNT_VALUE,
    value,
    id
})
export const SelectInitialCurrency = () => ({
    type: SELECT_INITIAL_CURRENCY,
})
export const DropdownHandler = (id) => ({
    type: DROPDOWN_HANDLER,
    id
})
export const CurrencySelector = (id, currency) => ({
    type: SELECT_CURRENCY,
    currency,
    id
})
export const NavToggle = () => ({
    type: NAV_TOGGLE
})