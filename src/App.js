import './App.scss'
import Background from "./Components/Background/Background";
import {Switch, Route} from 'react-router-dom'
import CurrencyExchange from "./Pages/CurrencyExchange/CurrencyExchange";
import Header from "./Components/Header/Header";

const App = () => {
    return (
        <div className="App">
            <Background/>
            <Header/>
            <Switch>
            <Route path="/" component={CurrencyExchange}/>
            </Switch>
        </div>
    )
}

export default App
