import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';

import { checkUser, logout } from './store/user';
import { getInfo, cleanInfo } from './store/categories';


import Header from './components/header';
import Main from './components/main';
import { Pages } from './pages/Pages';

import './app.scss';
import { cleanError } from './store/status';

class AppComp extends Component {
  componentDidMount() {
    this.props.dispatch(checkUser());
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
  }

  onLogout = () => {
    this.props.dispatch(logout());
    this.props.dispatch(cleanInfo());
  }

  render() {
    const { user, info } = this.props;
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
  info: state.info,
  error: state.error
});

export default withRouter(connect(mapState)(AppComp));
export { AppComp };
