import Header from './components/header/header';
import Homepage from './components/Homepage/homepage';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Homepage /> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
