import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <div>
        <Note noteTitle="Sample Title" noteContent="This is a sample content" />
        <Note
          noteTitle="Another Title"
          noteContent="This is another sample content"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
