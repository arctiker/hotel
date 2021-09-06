import Homepage from './components/Homepage/homepage';

import { BrowserRouter } from 'react-router-dom';

import Test from './components/test/Test';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Homepage /> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
