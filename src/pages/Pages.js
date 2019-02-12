import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './login';
import CreateUser from './createUser';
import Products from './products';
import UpdateUser from './updateUser';
import SuccessPage, { SuccessUpdate, SuccessNewProd } from './successPages';
import Home from './home';
import StartPage from './startPage';
import Category from './category';
import Categories from './categories';
import Product from './product';

export const Pages = ({ user, info }) => (
  <Switch>
    <Route
      path="/products/:id"
      render={({ match }) => <Product match={match} />}
      key="product"
    />,
    {
      user
        ? [
          <Route
            path="products/new"
            render={({ history }) => <Product history={history} />}
            key="newprod"
          />,
          <Route
            path="/(home)?"
            exact
            render={({ history }) => <Home user={user} info={info} history={history} />}
            key="home"
          />,
          <Route
            path="/category"
            component={Category}
            key="category"
          />,
          <Route
            path="/categories"
            component={Categories}
            key="categories"
          />,
          <Route
            path="/products"
            render={({ history }) => <Products history={history} />}
            key="products"
          />,
          <Route
            path="/profile"
            render={({ history }) => <UpdateUser onLogin={Login} history={history} />}
            key="profile"
          />,
          <Route
            path="/successupdate"
            exact
            component={SuccessUpdate}
            key="successupdate"
          />,
          <Route
            path="/successnewprod"
            exact
            component={SuccessNewProd}
            key="successnewprod"
          />,
          <Redirect from="/signin" to="/" key="redirect" />
        ]
        : [
          <Route
            path="/(home)?"
            exact
            component={StartPage}
            key="startpage"
          />,
          <Route
            path="/category"
            component={Category}
            key="category"
          />,
          <Route
            path="/categories"
            component={Categories}
            key="categories"
          />,
          <Route
            path="/products"
            render={({ history }) => <Products history={history} />}
            key="products"
          />,
          <Route
            path="/signin"
            render={() => <Login onLogin={Login} />}
            key="signin"
          />,
          <Route
            path="/signup"
            render={({ history }) => <CreateUser history={history} />}
            key="signup"

          />,
          <Route
            path="/success"
            component={SuccessPage}
            key="success"
          />
        ]
    }
    <Route
      render={() => <h3>Not Found</h3>}
      key="notFound"
    />
  </Switch>
);
