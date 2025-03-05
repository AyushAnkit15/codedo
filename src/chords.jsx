import React, { useState } from "react";

import guitarChords from "./constants/guitarChords";
import "./NotesGrid.css"; // Importing CSS file
// const guitarChords = {
//   C: { type: "Major", notes: ["C", "E", "G"] },
//   Cm: { type: "Minor", notes: ["C", "Eb", "G"] },
//   D: { type: "Major", notes: ["D", "F#", "A"] },
//   Dm: { type: "Minor", notes: ["D", "F", "A"] },
//   E: { type: "Major", notes: ["E", "G#", "B"] },
//   Em: { type: "Minor", notes: ["E", "G", "B"] },
//   F: { type: "Major", notes: ["F", "A", "C"] },
//   Fm: { type: "Minor", notes: ["F", "Ab", "C"] },
//   G: { type: "Major", notes: ["G", "B", "D"] },
//   Gm: { type: "Minor", notes: ["G", "Bb", "D"] },
//   A: { type: "Major", notes: ["A", "C#", "E"] },
//   Am: { type: "Minor", notes: ["A", "C", "E"] },
//   B: { type: "Major", notes: ["B", "D#", "F#"] },
//   Bm: { type: "Minor", notes: ["B", "D", "F#"] },
// };

const Chords = Object.keys(guitarChords);

const ChordsGrid = () => {
  const [selectedChords, setSelectedChords] = useState([]);
  const [numChords, setNumChords] = useState(1); // Default to 1 note selection

  // Function to toggle selection when a note is clicked
  const handleChordClick = (chord) => {
    setSelectedChords(
      (prevNotes) =>
        prevNotes.includes(chord)
          ? prevNotes.filter((n) => n !== chord) // Deselect if already selected
          : [...prevNotes, chord] // Add if not selected
    );
  };

  // Function to randomly select notes
  const getRandomChords = () => {
    let shuffledChords = [...Chords].sort(() => Math.random() - 0.5);
    setSelectedChords(shuffledChords.slice(0, numChords));
  };

  // Function to clear all selected notes
  const clearChords = () => {
    setSelectedChords([]);
  };

  return (
    <div className="container">
      {/* Notes Grid */}
      <div className="notes-grid">
        {Chords.map((chord) => (
          <div
            key={chord}
            className={`note-box ${
              selectedChords.includes(chord) ? "selected" : ""
            }`}
            onClick={() => handleChordClick(chord)}
          >
            {chord}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="controls">
        <label>Select number of random chords:</label>
        <select
          value={numChords}
          onChange={(e) => setNumChords(Number(e.target.value))}
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button onClick={getRandomChords}>Pick Random Chords</button>
        <button className="clear-btn" onClick={clearChords}>
          Clear Chords
        </button>
      </div>

      {/* Display Selected Notes */}
      <div className="selected-notes-box">
        <h3>Selected Chords:</h3>
        <p>
          {selectedChords.length > 0
            ? selectedChords.join(", ")
            : "No chord selected"}
        </p>
      </div>
    </div>
  );
};

export default ChordsGrid;
