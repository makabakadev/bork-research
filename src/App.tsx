import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { Home } from './pages/Home.tsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Main Content Area */}
        <div className="mt-20 sm:mt-24">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
