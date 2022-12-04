
import { useState } from 'react';
import Folder from './Components/Folder';
import explorer from './data'
function App() {
  const [data, setData]=useState(explorer);
  
  return (
    <div className="App">
      
      <Folder data={data} />
   
    </div>
  );
}

export default App;
