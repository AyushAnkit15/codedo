import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations

import NotesGrid from "./notes";
import ChordsGrid from "./chords";

const App = () => {
  const [selection, setSelection] = useState(null);

  return (
    <div style={styles.container}>
      {/* Selection Menu */}
      {!selection ? (
        <motion.div
          style={styles.selectionBox}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Select Mode</h2>
          <select
            onChange={(e) => setSelection(e.target.value)}
            style={styles.dropdown}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="notes">Notes</option>
            <option value="chords">Chords</option>
          </select>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => setSelection(null)} style={styles.backButton}>
            ← Back
          </button>
          {selection === "notes" ? <NotesGrid /> : <ChordsGrid />}
        </motion.div>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  selectionBox: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    display: "inline-block",
  },
  dropdown: { padding: "10px", fontSize: "16px", cursor: "pointer" },
  backButton: {
    margin: "10px",
    padding: "8px 15px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default App;
