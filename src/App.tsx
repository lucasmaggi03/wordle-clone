import { Routes, Route } from 'react-router-dom';
import { Wordle } from './assets/components/wordle';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Wordle/>}/>
    </Routes>
  )
}

export default App
