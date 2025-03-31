import { BrowserRouter as Router, Route, Routes } from 'react-router';
import LoginPage from "./pages/LoginPage/LoginPage"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/auth/login"} element={ <LoginPage/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
