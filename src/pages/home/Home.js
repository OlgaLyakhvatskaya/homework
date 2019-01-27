import { Redirect } from 'react-router-dom';

import './home.scss';

class FirstWindow extends Component {
  render() {
    const { user = {}, info } = this.props;

    return (
      <>
        <div className="wrap">
          <h1>Hello, {user.firstName}</h1>
          {
            info
              && (
                <ul>
                  <li>You have <strong>{info.categories}</strong> categories (<strong>{info.publishedCategories}</strong> published)</li>
                  <li>You have <strong>{info.products}</strong> products</li>
                </ul>
              )
          }
          <a className="link" href="/categories">Go to categories</a>
        </div>
      </>
    );
  }
}

export default FirstWindow;
