import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UpdateNote() {
  const { index } = useParams();
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTO] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const note = notes[index];
    setTitle(note.title);
    setFrom(note.from);
    setTO(note.to);
    setAmount(note.amount);
    setDescription(note.description);
  }, []);

  function updateHandler() {
    const updatedNote = {
      title: title,
      from: from,
      to: to,
      amount: amount,
      description: description,
    };
    const existingNotes = JSON.parse(localStorage.getItem("notes"));
    existingNotes[index] = updatedNote;
    localStorage.setItem("notes", JSON.stringify(existingNotes));
  }

  return (
    <>
      <h2 className="text-decoration-underline mb-4">update Note:</h2>
      <form action="">
        <input type="hidden" name="counter" />
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="from" className="form-label">
              From:
            </label>
            <input
              type="text"
              className="form-control"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="to" className="form-label">
              To:
            </label>
            <input
              type="text"
              className="form-control"
              id="to"
              value={to}
              onChange={(e) => setTO(e.target.value)}
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="amount" className="form-label">
              Amount:
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <Link to="/" className="btn btn-primary w-100" onClick={updateHandler}>
          Update
        </Link>
      </form>
    </>
  );
}

export default UpdateNote;
