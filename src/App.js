import Navbar from './Navbar';
import Text from './Text';
import React, { useState } from 'react'

function App() {
  const[mode, setMode] = useState('light')

  const toggleMode = () => {
      if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor ='#062847';
      } else 
      {
          setMode('light')
          document.body.style.backgroundColor ='white';

      }
  }

  return (
    <div classNameName="App">
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Text mode={mode}/>
    
    
    </div>
  );
}

export default App;
