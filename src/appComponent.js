import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkUser, logout } from './store/user';
import { getInfo, cleanInfo } from './store/categories';
import Header from './components/header';
import Main from './components/main';
import { Pages } from './pages/Pages';

import './app.scss';
import { getListProd, getProduct } from './services';

class AppComp extends Component {
  state = {
    listProd: [],
    loading: true,
    product: null
  }

  componentDidMount() {
    this.props.dispatch(checkUser());
    getListProd()
      .then(listProd => this.setState({ listProd }));
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.props.dispatch(getInfo());
    }

    if (prevProps.user && !this.props.user) {
      this.props.history.push('/');
    }
  }

<<<<<<< Updated upstream
  render() {
    const { user, info, loading, list } = this.state;
=======
  onLogout = () => {
    this.props.dispatch(logout());
    this.props.dispatch(cleanInfo());
  }

>>>>>>> Stashed changes

  render() {
    const { loading, listProd } = this.state;
    const { user, info, history } = this.props;
    return (
      <>
<<<<<<< Updated upstream
        <Header user={user} info={info} />
        <Main
          user={user}
          info={info}
          list={list}
          onLogin={this.onLogin}
          loading={loading}
        >
          <Pages />
=======
        <Header
          user={user}
          onLogout={this.onLogout}
          history={history}
          info={info}
        />
        <Main>
          <Pages
            user={user}
            listProd={listProd}
            onLogin={this.onLogin}
            loading={loading}
            info={info}
          />
>>>>>>> Stashed changes
        </Main>
      </>
    );
  }
}

const mapState = state => ({
  user: state.user,
  info: state.info
});

export default withRouter(connect(mapState)(AppComp));
