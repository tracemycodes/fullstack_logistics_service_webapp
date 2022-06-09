import { ThemeProvider } from 'styled-components';
import { Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { LightTheme } from './theme/globalStyle';
import Home from './containers/home/Home';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={LightTheme}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
