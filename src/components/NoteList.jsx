import React from 'react';
import TaskCard from './NoteCard';
import { Link } from 'react-router-dom';

function TaskList() {
  const storedNotes = localStorage.getItem("notes");
  const notes = storedNotes ? JSON.parse(storedNotes) : [];

  return (
    <>
      <Link to='/add' className='btn btn-primary w-100'>Add Note</Link>
      <div className="cards mt-5">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <TaskCard key={index} note={note} index={index} />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default TaskList;