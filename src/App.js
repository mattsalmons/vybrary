import Vinyls from './VinylList';
import Add from './Add';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <h1>Vybrary</h1>
      <Search />
      <Add />
      <Vinyls />
    </div>
  );
}

export default App;
