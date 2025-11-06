import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header section */}
      <header className="header">
        <div className="logo-section">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="title">React Tutorial</h1>
      </header>

      {/* Topics Section */}
      <main className="topics">
        <h2>Topics</h2>

        <div className="topic">
          <h3>1. Basics</h3>
          <p>
            React is a JavaScript library for building user interfaces. It allows
            developers to create reusable components and manage complex UIs
            efficiently.
          </p>
        </div>

        <div className="topic">
          <h3>2. Single Page Application (SPA)</h3>
          <p>
            React apps are typically single-page applications. This means the
            page does not reload when navigating between components, providing a
            smooth user experience.
          </p>
        </div>

        <div className="topic">
          <h3>3. Rendering</h3>
          <p>
            Rendering is the process of converting React components into actual
            DOM elements displayed in the browser. React efficiently updates
            only the changed parts of the UI.
          </p>
        </div>

        <div className="topic">
          <h3>4. DOM and Virtual DOM</h3>
          <p>
            The Virtual DOM is a lightweight copy of the real DOM. React updates
            the Virtual DOM first and then syncs only the necessary changes to
            the real DOM, improving performance.
          </p>
        </div>

        <div className="topic">
          <h3>5. JSX</h3>
          <p>
            JSX is a syntax extension for JavaScript that allows you to write
            HTML-like code directly inside JavaScript. It makes code more
            readable and easier to write.
          </p>
        </div>
      </main>

      {/* Counter Section */}
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
