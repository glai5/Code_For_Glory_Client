import React, { useState } from 'react';
import Frame1 from './Frame1.jsx';
import Frame2 from './Frame2.jsx';

function App() {
  const [currentFrame, setCurrentFrame] = useState(1);

  const handleFileUpload = () => {
    // Switch to Frame2 when a file is uploaded
    setCurrentFrame(2);
  };

  return (
    <div>
      {currentFrame === 1 ? (
        <Frame1 onFileUpload={handleFileUpload} />
      ) : (
        <Frame2 />
      )}
    </div>
  );
}

export default App;