import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEntry(createTerm) {
  return (
    <Entry
      emoji={createTerm.emoji}
      name={createTerm.name}
      desc={createTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
