import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RegisterPage from './pages/users/register';
import LoginPage from './pages/users/login';
import ProfilePage from './pages/users/profile';
import ReservationList from './pages/reservations/reservationsList';
import NewReservation from './pages/reservations/newReservation';

function App() {
  return (
    <>
      < BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users/register/" element={<RegisterPage />} />
          <Route path="/me" element={<ProfilePage />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/reservations/new" element={<NewReservation />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>