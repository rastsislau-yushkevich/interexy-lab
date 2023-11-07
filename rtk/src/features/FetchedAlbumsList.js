import { useMemo } from "react";
import { useGetAlbumsQuery } from "./api/apiSlice";

const FetchedAlbumsList = () => {
    const {data: albums = [], isLoading} = useGetAlbumsQuery();
    const sortedAlbums = useMemo(() => {
       let sortedAlbums = [...albums];
       sortedAlbums.sort((a, b) => {
        if(a.title < b.title) {
            return -1;
        }
        if(a.title > b.title) {
            return 1;
        }
        return 0;
       });
       return sortedAlbums
    }, [albums])
  return (
    <>
      <div>
        {isLoading ? <h1>Loading...</h1> : sortedAlbums?.map(({ id, title }) => (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchedAlbumsList;
