import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import Products from './products';
import UpdateUser from './updateUser';
import SuccessPage from './successPage';
import Home from './home';
import StartPage from './startPage';
import Category from './category';
import Categories from './categories';
import Product from './product';

export const Pages = ({ user, info, listProd }) => (
  <Switch>
    <Route
      path="/products/:id"
      component={Product}
      key="product"
    />,
    {
      user
        ? [
          <Route
            path="/(home)?"
            exact
            render={() => <Home info={info} user={user} />}
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
            render={() => <Products listProd={listProd} />}
            key="products"
          />,
          <Route
            path="/profile"
            render={({ history }) => <UpdateUser onLogin={Login} history={history} />}
            key="profile"
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
