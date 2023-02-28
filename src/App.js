import './App.css';
import { MantineProvider } from '@mantine/core';
import { Button } from '@mantine/core'

function App() {
  return (
     <MantineProvider
     withGlobalStyles
     withNormalizeCSS
     theme={{
       colorScheme: 'light',
       colors: {
         // Add your color
        // deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
         // or replace default theme color
        // blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
       },

       shadows: {
         md: '1px 1px 3px rgba(0, 0, 0, .25)',
         xl: '5px 5px 3px rgba(0, 0, 0, .25)',
       },

       headings: {
         fontFamily: 'Roboto, sans-serif',
         sizes: {
           h1: { fontSize: 30 },
         },
       },
     }}
   >
     <div className="App">
     <p>demo React app .. welcome to world this is new app</p>
     <Button>Join</Button>
     <Button variant="filled" color="cyan">Filled button</Button>
     </div>
   </MantineProvider>
   
  );
}

export default App;
