import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react'

function App() {
  const [lightMode, setLightMode] = React.useState(false)

  function toggleLightMode() {
    setLightMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode}/>
      <Main lightMode={lightMode}/>
    </div>
  );
}

export default App;
