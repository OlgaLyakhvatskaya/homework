import { connect } from 'react-redux';
import ControlItems from '../../components/controlItems';
import { getCategories, updateCategory } from '../../store/categories';

const isPublished = category => category.published;
const notPublished = category => !category.published;

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  updateCategories = (title, id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.title = title;

    this.props.dispatch(updateCategory(category));
  }

  unpublishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = false;

    this.props.dispatch(updateCategory(category));
  }

  publishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = true;

    this.props.dispatch(updateCategory(category));
  }


  render() {
    const { categories } = this.props;

    return (
      <section>
        <h3>Categories</h3>
        <ControlItems
          leftItems={categories.filter(isPublished)}
          rightItems={categories.filter(notPublished)}
          onChangeLeftItem={this.updateCategories}
          removeItem={this.unpublishCategory}
          addItem={this.publishCategory}
        />
      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
