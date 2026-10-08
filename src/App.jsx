import MovieTe from './components/movieTe';
import MovieIf from './components/movieIf';
import MovieEe from './components/movieEe';

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h1>Exemplos de Consumo de API com Debounce</h1>
      
      {/* Teste cada uma das abordagens: */}
      <MovieTe />
      <hr />
      <MovieIf />
      <hr />
      <MovieEe />
    </div>
  );
}

export default App;