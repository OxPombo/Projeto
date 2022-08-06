import './App.css';
import SegundaLista from './components/evento/SegundaLista';

function App() {
  
  const meusItens = ['React', 'Vue', 'Angular'] /* Array = Lista de algo */

  return (

    <div className="App">
      
       <h1> Renderização de listas</h1>
      <SegundaLista itens={meusItens} />
      <SegundaLista itens={[]} />
    </div>
  );
  
}

export default App;
