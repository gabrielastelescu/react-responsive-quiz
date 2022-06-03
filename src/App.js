import './App.css';
import Quiz from './pages/Quiz';
import { Routes, Route } from "react-router"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Quiz/>} />
        <Route path="quiz" element={<Quiz/>} />
        <Route path="showResults" element={<Quiz/>} />
      </Routes>
    </div>
  );
}

export default App;
