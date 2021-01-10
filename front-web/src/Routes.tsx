import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Routes() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/orders" component={Orders} />
            </Switch>
            <Footer />
        </Router>
    );
}