import "./Frame3.css";
import cfglogo from "./images/cfglogo_transparent.png";
import home_button from "./images/home_button.png";
import React, { useState, useEffect } from "react";

function Frame3({ selectedIndex, tableRows, nameColumn, rowData, onSave }) {
  
  const [score, setScore] = useState("");
  const [notes, setNotes] = useState("");
  const [updatedTableRows, setUpdatedTableRows] = useState([...tableRows]);
  const [updatedRowData, setUpdatedRowData] = useState([...rowData]);

  useEffect(() => {
    // Check for "Score" and "Notes" columns in tableRows
    let newTableRows = [...tableRows];
    let newRowData = [...rowData];

    if (!tableRows.includes("Score")) {
      newTableRows.push("Score"); // Add "Score" column
      newRowData.push(""); // Initialize empty score for the current row
    }

    if (!tableRows.includes("Notes")) {
      newTableRows.push("Notes"); // Add "Notes" column
      newRowData.push(""); // Initialize empty notes for the current row
    }

    setUpdatedTableRows(newTableRows);
    setUpdatedRowData(newRowData);

    // Pre-fill input boxes with existing data
    const scoreIndex = newTableRows.indexOf("Score");
    const notesIndex = newTableRows.indexOf("Notes");
    if (scoreIndex !== -1) setScore(newRowData[scoreIndex]);
    if (notesIndex !== -1) setNotes(newRowData[notesIndex]);
  }, [tableRows, rowData]);

  const handleSave = () => {
    // Update rowData with the new values
    const newRowData = [...updatedRowData];
    newRowData[updatedTableRows.indexOf("Score")] = score;
    newRowData[updatedTableRows.indexOf("Notes")] = notes;

    onSave(newRowData, updatedTableRows); // Save updated data to parent state
  };

  if (!rowData || selectedIndex === null || !tableRows) {
    return <div>No data available.</div>;
  }

  return (
    <div>
        <nav class="navbar">
            <div class="container-fluid">
              <a href="index">
                  <img class="ps-2 pe-4" height="60" src={cfglogo} alt="Code For Good"/>
              </a>
              <a href="./Frame1.jsx" class="home-button">
                  <img src={home_button} alt="Button Image"/>
              </a>
            </div>
        </nav>
        
        <div class="frame3-container">
            {/* Display the selected name prominently */}
            <h1 id="applicant-name">{nameColumn[selectedIndex]}</h1>

            {/* Table displaying the details */}
            <table class="details-table">
                <tbody>
                    {tableRows.map((columnName, index) => (
                        <tr key={index}>
                            <th>{columnName}</th> {/* Column name */}
                            <td>{rowData[index]}</td> {/* Corresponding value */}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Input boxes for Score and Notes */}
            <div className="input-container">
              <label htmlFor="score-input">Score:</label>
              <input
                id="score-input"
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />

              <label htmlFor="notes-input">Notes:</label>
              <textarea
                id="notes-input"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Save Button */}
            <button onClick={handleSave} className="save-button">
              Save
            </button>
        </div>
    </div>
  );
}

export default Frame3;