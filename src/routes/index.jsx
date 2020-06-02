import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainRoute from './MainRoute';
import ProductRoute from './ProductRoute';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <MainRoute />
        </Route>
        <Route path="product/:product_alias">
            <ProductRoute />
        </Route>
    </Switch>
)

export default Routes;