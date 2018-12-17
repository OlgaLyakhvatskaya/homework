import './main.scss';
import Button from '../button';
import ShowText from '../showText';
import ListUserPost from '../ListUserPost';
import GeoLocation from '../geoLocation';
import Stopwatch from '../stopwatch';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
    this.getList();
  }

  getList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  getPost = (user) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { users, posts } = this.state;

    return (
      <main className="main">
        <div className="container">
          <Button />
          <ShowText />
          <ListUserPost
            list={users}
            postList={posts}
            click={this.getPost}
          />
          <GeoLocation />
          <Stopwatch />
        </div>
      </main>
    );
  }
}

export default Main;
