import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ErrorPage from './pages/Error/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detail from './pages/View/Detail';
import Admin from './pages/Admin/Admin';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Search from './pages/Search/Search';
import Checkout from './pages/Checkout/Checkout';
import Complete from './pages/Checkout/Complete';
import Footer from './components/Footer/Footer'

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/auth" />;
    }
    return <Navigate to="/auth" />; 
  };
  return (
    <>
      <ToastContainer position="top-right" />
      {/* <Header /> */}
      <Routes>
        <Route path='/search' index element={<Search />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/zip-admin-cen" element={<Admin />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route
          path="/products"
          exact
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route path='/checkout' index element={<Checkout />} />
        <Route path='/complete' index element={<Complete />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
