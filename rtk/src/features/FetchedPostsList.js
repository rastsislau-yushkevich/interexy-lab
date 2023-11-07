import { useGetPostsQuery } from "./api/apiSlice";

const FetchedPostsList = () => {
    const {data: posts, isLoading} = useGetPostsQuery();
  return (
    <>
      <div>
        {isLoading ? <h1>Loading...</h1> : posts?.map(({ id, title, body }) => (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchedPostsList;
