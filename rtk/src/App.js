import Counter from './features/Counter'
import CounterWithText from './features/CounterWithText';
import FetchedAlbumsList from './features/FetchedAlbumsList';
import FetchedPostsList from './features/FetchedPostsList';
import PostsList from './features/PostsList';
import RefTutorial from './features/RefTutorial';
import YandexCounter from './features/YandexCounter';

function App() {
  return (
    <div>
      <Counter />
      <PostsList />
      <FetchedPostsList />
      <FetchedAlbumsList />
      <CounterWithText />
      <RefTutorial />
      <YandexCounter />
    </div>
  );
}

export default App;
