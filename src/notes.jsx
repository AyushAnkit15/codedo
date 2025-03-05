import React, { useState } from "react";
import "./NotesGrid.css"; // Importing CSS file
import { notes } from "./constants/notes";

// const notes = ["SA", "RE", "GA", "MA", "PA", "DHA", "NI"];

const NotesGrid = () => {
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [numNotes, setNumNotes] = useState(1); // Default to 1 note selection

  // Function to toggle selection when a note is clicked
  const handleNoteClick = (note) => {
    setSelectedNotes(
      (prevNotes) =>
        // prevNotes.includes(note)
        //   ? prevNotes.filter((n) => n !== note) // Deselect if already selected
        //   :
        [...prevNotes, note] // Add if not selected
    );
  };

  // Function to randomly select notes
  const getRandomNotes = () => {
    let shuffledNotes = [...notes].sort(() => Math.random() - 0.5);
    setSelectedNotes(shuffledNotes.slice(0, numNotes));
  };

  // Function to clear all selected notes
  const clearNotes = () => {
    setSelectedNotes([]);
  };

  return (
    <div className="container">
      {/* Notes Grid */}
      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note}
            className={`note-box ${
              selectedNotes.includes(note) ? "selected" : ""
            }`}
            onClick={() => handleNoteClick(note)}
          >
            {note}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="controls">
        <label>Select number of random notes:</label>
        <select
          value={numNotes}
          onChange={(e) => setNumNotes(Number(e.target.value))}
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button onClick={getRandomNotes}>Pick Random Notes</button>
        <button className="clear-btn" onClick={clearNotes}>
          Clear Notes
        </button>
      </div>

      {/* Display Selected Notes */}
      <div className="selected-notes-box">
        <h3>Selected Notes:</h3>
        <p>
          {selectedNotes.length > 0
            ? selectedNotes.join(", ")
            : "No notes selected"}
        </p>
      </div>
    </div>
  );
};

export default NotesGrid;
