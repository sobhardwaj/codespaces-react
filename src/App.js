import './App.css';
import { MantineProvider } from '@mantine/core';
import { Button } from '@mantine/core'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
       <div className="App">
     <p>demo React app ..</p>
     <Button>Join</Button>
    </div>
    </MantineProvider>
   
  );
}

export default App;
