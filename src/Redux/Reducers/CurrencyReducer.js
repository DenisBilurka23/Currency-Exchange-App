import {
    CHANGE_INPUT_VALUE, COUNT_VALUE, DROPDOWN_HANDLER,
    GET_CURRENCY_LIST, NAV_TOGGLE,
    SELECT_CURRENCY,
    SELECT_INITIAL_CURRENCY
} from "../ActionTypes/ActionTypes";

const initialState = {
    currencyList: [
        {
            buy: 1,
            ccy: "UAH",
            sale: 1,
            base_ccy: "UAH"
        }
    ],
    currencyFields: [
        {
            tittle: 'How much money you want to change?',
            value: '',
            currency: 'UAH',
            id: 0,
            selectedCurrency: null,
            isActive: false,
        },
        {
            tittle: 'You will receive',
            value: '',
            currency: 'USD',
            id: 1,
            selectedCurrency: null,
            isActive: false
        }
    ],
    showNav: false
}

const CurrencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                currencyFields: state.currencyFields.map(item => {
                    if (item.id === action.id) {
                        item.value = action.value
                    }
                    return item
                })
            }
        }
        case GET_CURRENCY_LIST: {
            return {
                ...state,
                currencyList: [...state.currencyList, ...action.payload]
            }
        }
        case SELECT_INITIAL_CURRENCY: {
            return {
                ...state,
                currencyFields: state.currencyFields.map((item, index) => {
                    index === 0 ?
                        item.selectedCurrency = {
                            ...state.currencyList.filter(item => {
                                return item.ccy === 'UAH'
                            })[0]
                        }

                        : item.selectedCurrency = {
                            ...state.currencyList.filter(item => {
                                return item.ccy === 'USD'
                            })[0]
                        }
                        item.currency = item.selectedCurrency.ccy
                    return item
                })
            }
        }
        case COUNT_VALUE: {
            return {
                ...state,
                currencyFields: state.currencyFields.map(item => {
                    if (item.id === action.id) {
                        item.value = action.value
                    }
                    return item
                })
            }
        }
        case DROPDOWN_HANDLER: {
            return {
                ...state,
                currencyFields: state.currencyFields.map(item => {
                    if (item.id === action.id) item.isActive = !item.isActive
                    return item
                })
            }
        }
        case SELECT_CURRENCY: {
            return {
                ...state,
                currencyFields: state.currencyFields.map(item => {
                    if (item.id === action.id) {
                        state.currencyList.filter(currency => {
                            if (currency.ccy === action.currency) {
                                item.selectedCurrency = currency
                                item.currency = item.selectedCurrency.ccy
                                console.log(item)
                            }
                            return currency
                        })
                    }
                    return item
                })
            }
        }
        case NAV_TOGGLE: {
            return {
                ...state,
                showNav: !state.showNav
            }
        }
        default:
            return state
    }
}
export default CurrencyReducer