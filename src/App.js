import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TermsConditionsPage from './components/terms-conditions';
import Landing from './components/landing';
import ThankYouPage from './components/thank-you';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/terms-conditions' element={<TermsConditionsPage/>}/>
        <Route path='/thank-you' element={<ThankYouPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
