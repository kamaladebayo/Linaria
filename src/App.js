import './App.css';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import Leaderboard from "./Components/Leaderboard";
import { Routes, Route } from "react-router-dom";
import Account from './Components/Account';
function App() {
  return (
    <div className="app">
     <Routes>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
