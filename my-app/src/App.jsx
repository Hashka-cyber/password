import React from "react";

function App() {

  function handleTyping(event) {
    console.log("Typing:", event.target.value);
  }

  function handleMouseEnter() {
    console.log("Mouse entered button");
  }

  function handleMouseLeave() {
    console.log("Mouse left button");
  }

  return (
    <div>

      <input
        type="password"
        onChange={handleTyping}
      />

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Submit Password
      </button>

    </div>
  );
}

export default App;