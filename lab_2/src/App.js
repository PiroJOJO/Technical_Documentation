import './App.css';
import IntroductionPanel from './components/IntroductionPanel';
import MainPanel from './components/MainPanel';
import СonclusionPanel from './components/СonclusionPanel';
import Sidebar from './components/Sidebar';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
          <Route path='/*' element={<MainPanel />}/>
          <Route path='/main' element={<MainPanel />}/>
          <Route path='/intro' element={<IntroductionPanel />}/>
          <Route path='/end' element={<СonclusionPanel />}/>
      </Routes>
    </div>
  );
}

export default App;
