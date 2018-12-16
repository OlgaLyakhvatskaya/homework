import './listUserPost.scss';

const ListUserPost = ({ list, postList, click }) => {
  const users = list.map(item => <li key={item.id} onClick={() => click(item)}>{item.name}</li>);
  const posts = postList.map(({ body, title, id }) => <p key={id}><strong>{title}</strong>{body}</p>);
  return (
    <div className="user">
      <ul>{users}</ul>
      <div className="post">{posts}</div>
    </div>
  );
};

export default ListUserPost;
