import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Cart from './containers/Cart';
import Homepage from './containers/Homepage';
import Landing from './containers/Landing';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import WishList from './containers/WishList';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getUser } from './reducks/users/selectors';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        
    }, []);


    return (
        <Switch>
            <Route exact path={"/"} component={token ? Homepage : Landing} />
            <Route exact path={"/sign-in"} component={SignIn} />
            <Route exact path={"/sign-up"} component={SignUp} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/WishList"} component={WishList} />

            
            
        </Switch>
    );
};
export default Router;