import React, { useState } from 'react';
import Frame1 from './Frame1.jsx';
import Frame2 from './Frame2.jsx';
import Frame3 from './Frame3.jsx'

function App() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [nameColumn, setNameColumn] = useState([]); // To store the list of names
  const [selectedIndex, setSelectedIndex] = useState(null); // To track the selected index
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  const handleFileUpload = () => {
    // Switch to Frame2 when a file is uploaded
    setCurrentFrame(2);
  };

  const handleGoToFrame3 = (rowIndex, tableRowsData, nameColumnData, rowData) => {
    setSelectedIndex(rowIndex); // Set the selected index
    setNameColumn(nameColumnData); // Pass the name column
    setSelectedRowData(rowData); // Pass the row data
    setTableRows(tableRowsData) // Pass the table rows {column names of csv}
    setCurrentFrame(3); // Navigate to Frame3
  };

  const handleSave = (newRowData, newTableRows) => {
    // Update state with new data
    setSelectedRowData(newRowData);
    setTableRows(newTableRows);
  }

  return (
    <div>
      {currentFrame === 1 && <Frame1 onFileUpload={handleFileUpload} />}
      {currentFrame === 2 && <Frame2 onGoToFrame3={handleGoToFrame3} />}
      {currentFrame === 3 && selectedRowData && 
        <Frame3
          nameColumn={nameColumn}
          tableRows={tableRows}
          selectedIndex={selectedIndex}
          rowData={selectedRowData}
          onSave={handleSave}
        />
      }
    </div>
  );
}

export default App;