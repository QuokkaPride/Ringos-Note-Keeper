import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Note noteTitle="Sample Title" noteContent="This is a sample content" />
      <Footer />
    </div>
  );
}

export default App;
