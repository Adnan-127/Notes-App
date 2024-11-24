import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddNote() {
  const [title, setTitle] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTO] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  function addHandler() {
    const note = {
      title: title,
      from: from,
      to: to,
      amount: amount,
      description: description
    };
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const notes = [...existingNotes, note];
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  return (
    <>
      <h2 className="text-decoration-underline mb-4">Add New Note:</h2>
      <form action="">
        <input type="hidden" name="counter" />
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="from" className="form-label">From:</label>
            <input type="text" className="form-control" id="from" onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="mb-3 col">
            <label htmlFor="to" className="form-label">To:</label>
            <input type="text" className="form-control" id="to" onChange={(e) => setTO(e.target.value)} />
          </div>
          <div className="mb-3 col">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input type="number" className="form-control" id="amount" onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea className="form-control" id="description" rows={5} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <Link to="/" className="btn btn-primary w-100" onClick={addHandler}>Add</Link>
      </form>
    </>
  );
}

export default AddNote;