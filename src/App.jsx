import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router';
import LoginPage from "./pages/LoginPage/LoginPage"
import HomePage from './pages/HomePage/HomePage';
import Header from "./utils/Header/Header";
import SideBar from "./utils/SideBar/SideBar";
import Layout from "./utils/Layout/Layout";


function App() {
  return (
    <>
       <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
