import './css/App.css';
import StartPage from './components/StartPage'
import Women from './components/Women'
import Men from './components/Men'
import Contact from './components/Contact'
import CheckoutPage from './components/CheckoutPage'
import ProductPage from './components/ProductPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <StartPage/>
                    </Route>
                    <Route path="/women">
                        <Women/>
                    </Route>
                    <Route path="/men">
                        <Men/>
                    </Route>
                    <Route path="/Contact">
                        <Contact/>
                    </Route>
                    <Route path="/checkoutpage">
                        <CheckoutPage/>
                    </Route>
                    <Route path="/productpage">
                        <ProductPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
