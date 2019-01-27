import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkUser, logout } from './store/user';
import { getInfo, cleanInfo } from './store/categories';
import { ToastContainer } from 'react-toastr';

import Header from './components/header';
import Main from './components/main';
import { Pages } from './pages/Pages';

import './app.scss';
import { getListProd } from './services';
import { cleanError } from './store/status';


class AppComp extends Component {
  state = {
    listProd: [],
    loading: true,
    product: null
  }

  componentDidMount() {
    this.props.dispatch(checkUser());
    // getListProd()
    //   .then(listProd => this.setState({ listProd }));
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.props.dispatch(getInfo());
    }

    if (prevProps.user && !this.props.user) {
      this.props.history.push('/');
    }

    if (!prevProps.error && this.props.error) {
      this.container.error(
        this.props.error,
        "error"
      );
      this.props.dispatch(cleanError());


    }


  onLogout = () => {
    this.props.dispatch(logout());
    this.props.dispatch(cleanInfo());
  }
  render() {
    const { loading, listProd } = this.state;
<<<<<<< HEAD
    const { user, info } = this.props;

=======
    const { user, info, history } = this.props;
>>>>>>> 5c5fb3e0b76a4f004639c8260fa150ecef45e853
    return (
      <>
        <Header
          user={user}
          info={info}
          onLogout={this.onLogout}
        />
        <Main>
          <Pages
            user={user}

            info={info}
            listProd={listProd}
            onLogin={this.onLogin}
            loading={loading}
          />
        </Main>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      </>
    );
  }
}

const mapState = state => ({
  user: state.user,
  error: state.error,
  info: state.info
});

export default withRouter(connect(mapState)(AppComp));
