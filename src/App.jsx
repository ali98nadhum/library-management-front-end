import { BrowserRouter as Router, Route, Routes } from 'react-router';
import LoginPage from "./pages/LoginPage/LoginPage"
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/auth/login"} element={ <LoginPage/> } />
          <Route path={"/"} element={ <HomePage/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
