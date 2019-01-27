import './successPage.scss';

const SuccessPage = () => (
  <div className="successPage">
    <h3>Account was successfully created</h3>
    <p>Now you can use your email and password to login into profile.</p>
    <a className="link" href="/signin">Go to login</a>
  </div>
);

export default SuccessPage;
