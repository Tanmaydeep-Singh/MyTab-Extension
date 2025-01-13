import React from 'react';
import Time from './Components/Time';
import GoogleSearchBar from './Components/GoogleSearchBar';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
            <Time/>
            <GoogleSearchBar/>
    
    </div>
  );
}

export default App;
