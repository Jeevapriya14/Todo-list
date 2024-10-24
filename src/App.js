import './App.css';
import TodoForm from './components/TodoForm';
import {TodoWrapper} from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <p> To-list app</p>
        <TodoWrapper />

    </div>
  );
}

export default App;
