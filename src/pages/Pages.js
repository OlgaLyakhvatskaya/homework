import { Route, Switch } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import Products from './products';
import UpdateUser from './updateUser';
import SuccessPage from './successPage';
import Home from './home';
import StartPage from './startPage';
import Category from './category';
import Categories from './categories';

export const Pages = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Home}
    />
    <Route
      path="/signin"
      component={Login}
    />
    <Route
      path="/category"
      component={Category}
    />
    <Route
      path="/categories"
      component={Categories}
    />
    <Route
      path="/startpage"
      component={StartPage}
    />
    <Route
      path="/signup"
      component={CreateUser}
    />
    <Route
      path="/products"
      component={Products}
    />
    <Route
      path="/profile"
      component={UpdateUser}
    />
    <Route
      path="/success"
      component={SuccessPage}
    />
    <Route
      render={() => <h3>Not Found</h3>}
    />
  </Switch>
);
