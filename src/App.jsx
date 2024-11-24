import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-danger text-center mt-5 mb-5">Notes</h1>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/update/:index" element={<UpdateNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
