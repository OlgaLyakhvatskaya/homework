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

export const Pages = ({ user, onLogin, info, list }) => (
  <Switch>
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
            render={() => <Products list={list} />}
            key="products"
          />,
          <Route
            path="/profile"
            render={({ history }) => <UpdateUser data={user} history={history} />}
            key="profile"
          />,
          <Redirect from="/signin" to="/" />
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
            render={() => <Login onLogin={onLogin} />}
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
    />
  </Switch>
);
