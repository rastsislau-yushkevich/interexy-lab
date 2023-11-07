import { useSelector } from 'react-redux';
import AddPost from './AddPost';
import { getAllPosts } from './postsSlice';

const PostsList = () => {
  const posts = useSelector(getAllPosts);
  return (
    <>
      <div>
        {posts.map(({ id, title, content }) => (
          <div key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        ))}
      </div>
      <AddPost />
    </>
  );
};

export default PostsList;
