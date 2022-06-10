import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { LightTheme } from './theme/globalStyle';
import Home from './containers/home/Home';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import DashboardState from './context/dashboard/DashboardState';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <AuthState>
        <DashboardState>
          <ThemeProvider theme={LightTheme}>
            <Router>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin/login' element={<Login />} />
                <Route
                  path='/admin/dashboard'
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Routes>
              <Footer />
            </Router>
          </ThemeProvider>
        </DashboardState>
      </AuthState>
    </div>
  );
}

export default App;
