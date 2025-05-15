import { Routes, Route } from 'react-router-dom';
import { ShowWord } from './assets/components/ShowWord';

function App() {

  return (
    <Routes>
      <Route path='/' element={<ShowWord/>}/>
    </Routes>
  )
}

export default App
