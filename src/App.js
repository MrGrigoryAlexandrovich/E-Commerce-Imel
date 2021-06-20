import './css/App.css';
import Navigation from './components/Navigation'
import StartPage from './components/StartPage'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import CheckoutPage from './components/CheckoutPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route path="/" exact>
                        <StartPage/>
                    </Route>
                    <Route path="/categorypage">
                        <CategoryPage/>
                    </Route>
                    <Route path="/productpage">
                        <ProductPage/>
                    </Route>
                    <Route path="/checkoutpage">
                        <CheckoutPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
