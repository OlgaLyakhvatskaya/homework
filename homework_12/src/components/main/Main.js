import './main.scss';
import Aside from '../aside/index';
import Hello from '../hello/index';
import List from '../list/index';
import Generate from '../generate/index';

const Main = () => {
  const listUsers = [
    { firstName: 'Teresa', lastName: 'Testva', age: 46 },
    { firstName: 'John', lastName: 'Testov', age: 100 }
  ];
  return (
    <main className="main">
      <div className="container">
        <Aside />
        <div className="content">
          <Hello date={new Date().getHours()} name="Olga" />
          <List from="5" to="8" />
          <Generate users={listUsers} />
        </div>
      </div>
    </main>
  );
};

export default Main;
