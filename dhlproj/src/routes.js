import React from 'react';
import { Switch, Route} from 'react-router-dom';
import CartContainer from './containers/CartContainer';
import Landing from './containers/Landing';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/cart" component={CartContainer}/>
        </Switch>
    </div>
)

export default Routes;