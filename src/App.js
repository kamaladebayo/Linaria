import './App.css';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import Leaderboard from "./Components/Leaderboard";
import { Routes, Route } from "react-router-dom";
import Account from './Components/Account';
import { initializeApp } from 'firebase/app';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCmDn267fklM8BhwnjcCZz1HemYrUcUbJI",
    authDomain: "linaria-7dd2c.firebaseapp.com",
    projectId: "linaria-7dd2c",
    storageBucket: "linaria-7dd2c.appspot.com",
    messagingSenderId: "253652967779",
    appId: "1:253652967779:web:fa7022e84514e8c8a97356"
  };
  
  const app = initializeApp(firebaseConfig);
  console.log(app);
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
