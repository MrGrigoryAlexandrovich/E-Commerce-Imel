import './css/App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import StartPage from './components/StartPage'
import Women from './components/Women'
import Men from './components/Men'
import ProductPage from './components/ProductPage'
import CheckoutPage from './components/CheckoutPage'
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
                    <Route path="/productpage">
                        <ProductPage/>
                    </Route>
                    <Route path="/checkoutpage">
                        <CheckoutPage/>
                    </Route>
                </Switch>
                <Navigation/>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
