import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 className="note h1">{props.noteTitle}</h1>
      <p className="note p">{props.noteContent}</p>
    </div>
  );
}

export default Note;

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
