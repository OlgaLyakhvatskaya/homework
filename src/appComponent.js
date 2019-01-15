import Header from './components/header';
import Main from './components/main';
import { Pages } from './pages/Pages';
import { checkUser, getInfo, getListCat } from './services';

import './app.scss';

class AppComp extends Component {
  state = {
    user: null,
    info: null,
    list: [],
    loading: true
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));

    getListCat()
      .then(list => this.setState({ list }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo()
        .then(info => this.setState({ info }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  render() {
    const { user, info, loading, list, history } = this.state;

    return (
      <>
        <Header user={user} info={info} onLogout={this.onLogout} history={history} />
        <Main>
          <Pages
            user={user}
            info={info}
            list={list}
            onLogin={this.onLogin}
            loading={loading}
          />
        </Main>
      </>
    );
  }
}

export default AppComp;
