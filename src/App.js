import Layout from './components/Layouts';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import FooterComponent from './components/Shared/Footer';
import SignUpForm from './components/Shared/SignUpForm';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
