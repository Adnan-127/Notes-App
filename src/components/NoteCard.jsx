import { Link } from "react-router-dom";

function NoteCard(props) {
  const note = props.note;

  function deleteNote() {
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(props.index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    window.location.reload();
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title pb-2 border-bottom">{note.title}</h5>
        <p className="card-text">
          <span className='d-block text-secondary mb-2'>From: {note.from}</span>
          <span className='d-block text-secondary mb-2'>To: {note.to}</span>
          <span className='d-block text-secondary'>Amount: {note.amount}</span>
        </p>
        <p className="card-text description">{note.description}</p>
        <div className="btns pt-2 border-top">
          <Link to={`/update/${props.index}`} className="btn btn-success d-inline-block me-2">Update</Link>
          <Link to={"/"} className="btn btn-danger d-inline-block" onClick={deleteNote}>delete</Link>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
